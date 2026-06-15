"use client";

import { ArrowLeft, MoreHorizontal } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { Separator } from "@/src/components/ui/separator";
import {
  AUDIENCE_OPTIONS,
  type AudienceId,
} from "@/src/layouts/public/new-feed/header/modal/audience-options";
import { cn } from "@/src/lib/utils";

type AudienceSelectorProps = {
  value: AudienceId;
  onChange: (value: AudienceId) => void;
  setAsDefault: boolean;
  onSetAsDefaultChange: (value: boolean) => void;
  onBack: () => void;
  onDone: () => void;
};

export default function AudienceSelector({
  value,
  onChange,
  setAsDefault,
  onSetAsDefaultChange,
  onBack,
  onDone,
}: AudienceSelectorProps) {
  return (
    <div className="flex max-h-[min(80vh,640px)] flex-col">
      <div className="relative flex items-center justify-center px-4 py-3.5">
        <Button
          type="button"
          variant="secondary"
          size="icon"
          aria-label="Quay lại"
          onClick={onBack}
          className="absolute left-4 size-9 rounded-full"
        >
          <ArrowLeft className="size-5" />
        </Button>

        <h2 className="text-lg font-semibold">Đối tượng của bài viết</h2>

        <Button
          type="button"
          variant="secondary"
          size="icon"
          aria-label="Tùy chọn khác"
          className="absolute right-4 size-9 rounded-full"
        >
          <MoreHorizontal className="size-5" />
        </Button>
      </div>

      <Separator />

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-1">
          <p className="text-[17px] font-semibold">Ai có thể xem bài viết của bạn?</p>
          <p className="text-[15px] text-muted-foreground">
            Bài viết của bạn sẽ hiển thị trên Bảng feed, trang cá nhân và trong kết
            quả tìm kiếm.
          </p>
        </div>

        <div className="mt-4 space-y-1">
          {AUDIENCE_OPTIONS.map((option) => {
            const Icon = option.icon;
            const isSelected = value === option.id;

            return (
              <motion.button
                key={option.id}
                type="button"
                onClick={() => onChange(option.id)}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={cn(
                  "flex w-full items-start gap-3 rounded-lg px-2 py-3 text-left transition-colors",
                  "hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                )}
              >
                <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
                  <Icon className="size-5 text-foreground" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{option.label}</p>
                  {option.linkLabel ? (
                    <span className="text-[15px] font-semibold text-primary">
                      {option.linkLabel}
                    </span>
                  ) : (
                    <p className="text-[15px] text-muted-foreground">
                      {option.description}
                    </p>
                  )}
                </div>

                <div
                  className={cn(
                    "mt-1 size-5 shrink-0 rounded-full border-2",
                    isSelected
                      ? "border-primary bg-primary"
                      : "border-muted-foreground/40 bg-transparent"
                  )}
                  aria-hidden
                />
              </motion.button>
            );
          })}
        </div>

        <label className="mt-4 flex cursor-pointer items-center gap-3 px-2 py-2">
          <input
            type="checkbox"
            checked={setAsDefault}
            onChange={(event) => onSetAsDefaultChange(event.target.checked)}
            className="size-4 rounded border-input accent-primary"
          />
          <Label className="cursor-pointer text-[15px] font-normal">
            Đặt làm đối tượng mặc định.
          </Label>
        </label>
      </div>

      <Separator />

      <div className="p-4">
        <Button type="button" className="h-10 w-full text-[15px] font-semibold" onClick={onDone}>
          Xong
        </Button>
      </div>
    </div>
  );
}
