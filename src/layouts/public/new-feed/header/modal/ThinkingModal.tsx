"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
    ChevronDown,
    Globe,
    MapPin,
    MoreHorizontal,
    Smile,
    UserRound,
    Video,
} from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/src/components/ui/dialog";
import { Field, FieldContent } from "@/src/components/ui/field";
import { Label } from "@/src/components/ui/label";
import { Separator } from "@/src/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/src/components/ui/tooltip";
import AudienceSelector from "@/src/layouts/public/new-feed/header/modal/AudienceSelector";
import BackgroundStylePicker from "@/src/layouts/public/new-feed/header/modal/BackgroundStylePicker";
import {
    getBackgroundPreset,
    hasBackgroundStyle,
    type BackgroundId,
} from "@/src/layouts/public/new-feed/header/modal/background-options";
import {
    AUDIENCE_OPTIONS,
    getAudienceLabel,
    type AudienceId,
} from "@/src/layouts/public/new-feed/header/modal/audience-options";
import { cn } from "@/src/lib/utils";

const photoIconUrl =
    "https://static.xx.fbcdn.net/rsrc.php/yX/r/8_VnccIZfRa.webp";

const addPostActions = [
    { label: "Ảnh/video", type: "photo" as const },
    {
        label: "Gắn thẻ người",
        type: "icon" as const,
        icon: UserRound,
        className: "text-blue-500",
    },
    {
        label: "Cảm xúc/hoạt động",
        type: "icon" as const,
        icon: Smile,
        className: "text-amber-500",
    },
    {
        label: "Check in",
        type: "icon" as const,
        icon: MapPin,
        className: "text-rose-500",
    },
    {
        label: "Video trực tiếp",
        type: "icon" as const,
        icon: Video,
        className: "text-rose-500",
    },
    {
        label: "Thêm",
        type: "icon" as const,
        icon: MoreHorizontal,
        className: "text-muted-foreground",
    },
] as const;

const emojiCategories = ["Mặt cười", "Biểu cảm", "Người", "Động vật", "Thức ăn", "Du lịch"];

const emojiGrid = [
    "😀","😃","😄","😁","😆","😅","🤣","😂",
    "🙂","🙃","😉","😊","😇","😍","😘","😗",
    "😙","😚","😋","😛","😝","😜","🤪","🤨",
    "🧐","🤓","😎","🥳","😏","😒","😞","😔",
];

type ThinkingModalProps = {
    trigger: ReactNode;
    avatarUrl: string;
    userName?: string;
};

type ModalStep = "compose" | "audience";

function FeedIcon({ src }: { src: string }) {
    return <img src={src} alt="" aria-hidden className="size-6 object-contain" />;
}

function getAudienceIcon(id: AudienceId) {
    return AUDIENCE_OPTIONS.find((option) => option.id === id)?.icon ?? Globe;
}

export default function ThinkingModal({
    trigger,
    avatarUrl,
    userName = "Tuyền Ngọc",
}: ThinkingModalProps) {
    const [content, setContent] = useState("");
    const [step, setStep] = useState<ModalStep>("compose");
    const [audience, setAudience] = useState<AudienceId>("public");
    const [setAsDefaultAudience, setSetAsDefaultAudience] = useState(false);
    const [open, setOpen] = useState(false);
    const [backgroundId, setBackgroundId] = useState<BackgroundId>("none");
    const [showBackgroundPicker, setShowBackgroundPicker] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const canSubmit = content.trim().length > 0;
    const AudienceIcon = getAudienceIcon(audience);
    const backgroundPreset = getBackgroundPreset(backgroundId);
    const isStyledBackground = hasBackgroundStyle(backgroundId);

    const handleOpenChange = (nextOpen: boolean) => {
        setOpen(nextOpen);
        if (!nextOpen) {
            setStep("compose");
            setBackgroundId("none");
            setShowBackgroundPicker(false);
            setShowEmojiPicker(false);
        }
    };

    const handleBackgroundChange = (nextBackground: BackgroundId) => {
        setBackgroundId(nextBackground);
        if (nextBackground === "none") {
            setShowBackgroundPicker(false);
        }
    };

    const handleEmojiSelect = (emoji: string) => {
        setContent((prev) => `${prev}${emoji}`);
        setShowEmojiPicker(false);
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent
                showCloseButton={step === "compose"}
                className="gap-0 overflow-hidden p-0 sm:max-w-[500px]"
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: step === "compose" ? -16 : 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: step === "compose" ? 16 : -16 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                        {step === "compose" ? (
                            <>
                                <DialogHeader className="space-y-0 px-4 py-3.5">
                                    <DialogTitle className="text-center text-lg font-semibold">
                                        Tạo bài viết
                                    </DialogTitle>
                                </DialogHeader>

                                <Separator />

                                <div className="flex items-center gap-3 px-4 py-3">
                                    <Image
                                        src={avatarUrl}
                                        alt={userName}
                                        width={40}
                                        height={40}
                                        className="block size-10 shrink-0 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold leading-tight">{userName}</p>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            size="sm"
                                            className="mt-1.5 h-7 gap-1 rounded-md px-2 text-xs font-semibold"
                                            onClick={() => setStep("audience")}
                                        >
                                            <AudienceIcon className="size-3.5" />
                                            {getAudienceLabel(audience)}
                                            <ChevronDown className="size-3.5" />
                                        </Button>
                                    </div>
                                </div>

                                <Field className="px-4 pb-3">
                                    <FieldContent>
                                        <div
                                            className={cn(
                                                "overflow-hidden rounded-xl transition-colors duration-300",
                                                isStyledBackground && backgroundPreset?.className,
                                                isStyledBackground && "min-h-[220px]",
                                                isStyledBackground &&
                                                !showBackgroundPicker &&
                                                "cursor-pointer"
                                            )}
                                            onClick={() => {
                                                if (isStyledBackground && !showBackgroundPicker) {
                                                    setShowBackgroundPicker(true);
                                                }
                                            }}
                                            onKeyDown={(event) => {
                                                if (
                                                    isStyledBackground &&
                                                    !showBackgroundPicker &&
                                                    (event.key === "Enter" || event.key === " ")
                                                ) {
                                                    event.preventDefault();
                                                    setShowBackgroundPicker(true);
                                                }
                                            }}
                                            role={isStyledBackground && !showBackgroundPicker ? "button" : undefined}
                                            tabIndex={isStyledBackground && !showBackgroundPicker ? 0 : undefined}
                                        >
                                            <div
                                                className={cn(
                                                    "px-1",
                                                    isStyledBackground
                                                        ? "flex min-h-[160px] items-center justify-center px-3 py-6"
                                                        : "py-1"
                                                )}
                                            >
                                                <textarea
                                                    value={content}
                                                    onChange={(event) => setContent(event.target.value)}
                                                    onClick={(event) => event.stopPropagation()}
                                                    placeholder="Ngọc ơi, bạn đang nghĩ gì thế?"
                                                    className={cn(
                                                        "w-full resize-none border-0 bg-transparent shadow-none outline-none",
                                                        "focus-visible:ring-0",
                                                        isStyledBackground
                                                            ? "min-h-[120px] text-center text-2xl font-semibold leading-snug"
                                                            : "min-h-40 text-xl",
                                                        isStyledBackground
                                                            ? backgroundPreset?.textClassName
                                                            : "text-foreground placeholder:text-muted-foreground"
                                                    )}
                                                />
                                            </div>

                                            <AnimatePresence>
                                                {showBackgroundPicker && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <BackgroundStylePicker
                                                            open
                                                            value={backgroundId}
                                                            onChange={handleBackgroundChange}
                                                            onClose={() => setShowBackgroundPicker(false)}
                                                        />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </FieldContent>

                                    {!showBackgroundPicker ? (
                                        <div className="flex items-center justify-between pt-1">
                                            <motion.div whileTap={{ scale: 0.94 }}>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    aria-label="Kiểu nền"
                                                    onClick={() => setShowBackgroundPicker((prev) => !prev)}
                                                    className="size-9 rounded-lg bg-linear-to-br from-sky-400 via-fuchsia-500 to-amber-400 text-sm font-bold text-white hover:opacity-90"
                                                >
                                                    Aa
                                                </Button>
                                            </motion.div>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                aria-label="Biểu tượng cảm xúc"
                                                onClick={() => setShowEmojiPicker((prev) => !prev)}
                                                className="size-10 rounded-full text-muted-foreground"
                                            >
                                                <Smile className="size-7" />
                                            </Button>
                                        </div>
                                    ) : null}

                                    <AnimatePresence>
                                        {showEmojiPicker && (
                                            <motion.div
                                                initial={{ y: 8, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: 8, opacity: 0 }}
                                                transition={{ duration: 0.18 }}
                                                className="mt-2 overflow-hidden rounded-2xl border bg-popover p-3 shadow-lg"
                                            >
                                                <div className="mb-3 flex gap-2 overflow-x-auto pb-1 text-sm font-medium text-muted-foreground">
                                                    {emojiCategories.map((category, index) => (
                                                        <button
                                                            key={category}
                                                            type="button"
                                                            className={cn(
                                                                "whitespace-nowrap rounded-full px-3 py-1 transition-colors",
                                                                index === 0
                                                                    ? "bg-primary/10 text-primary"
                                                                    : "hover:bg-muted hover:text-foreground"
                                                            )}
                                                        >
                                                            {category}
                                                        </button>
                                                    ))}
                                                </div>

                                                <div className="grid grid-cols-8 gap-2">
                                                    {emojiGrid.map((emoji) => (
                                                        <motion.button
                                                            key={emoji}
                                                            type="button"
                                                            whileTap={{ scale: 0.9 }}
                                                            onClick={() => handleEmojiSelect(emoji)}
                                                            className="flex size-9 items-center justify-center rounded-lg text-2xl hover:bg-muted"
                                                        >
                                                            {emoji}
                                                        </motion.button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Field>

                                <Card className="mx-4 mb-4 flex-row items-center justify-between px-3 py-2.5 ring-border/70 [--card-spacing:0]">
                                    <Label className="text-[15px] font-semibold">
                                        Thêm vào bài viết của bạn
                                    </Label>

                                    <TooltipProvider>
                                        <div className="flex items-center gap-0.5">
                                            {addPostActions.map((action) => (
                                                <Tooltip key={action.label}>
                                                    <TooltipTrigger asChild>
                                                        <motion.div whileTap={{ scale: 0.96 }}>
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="icon"
                                                                aria-label={action.label}
                                                                className="size-9 rounded-full"
                                                            >
                                                                {action.type === "photo" ? (
                                                                    <FeedIcon src={photoIconUrl} />
                                                                ) : (
                                                                    <action.icon
                                                                        className={cn("size-6", action.className)}
                                                                    />
                                                                )}
                                                            </Button>
                                                        </motion.div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>{action.label}</TooltipContent>
                                                </Tooltip>
                                            ))}
                                        </div>
                                    </TooltipProvider>
                                </Card>

                                <Separator />

                                <DialogFooter className="m-0 rounded-none border-0 bg-transparent p-4 sm:justify-stretch">
                                    <Button
                                        type="button"
                                        disabled={!canSubmit}
                                        className="h-10 w-full text-[15px] font-semibold"
                                    >
                                        Tiếp
                                    </Button>
                                </DialogFooter>
                            </>
                        ) : (
                            <AudienceSelector
                                value={audience}
                                onChange={setAudience}
                                setAsDefault={setAsDefaultAudience}
                                onSetAsDefaultChange={setSetAsDefaultAudience}
                                onBack={() => setStep("compose")}
                                onDone={() => setStep("compose")}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </DialogContent>
        </Dialog>
    );
}
