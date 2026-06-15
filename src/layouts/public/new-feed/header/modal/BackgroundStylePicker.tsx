"use client";

import { Ban, ChevronLeft, LayoutGrid } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@/src/components/ui/button";
import {
  BACKGROUND_PRESETS,
  type BackgroundId,
} from "@/src/layouts/public/new-feed/header/modal/background-options";
import { cn } from "@/src/lib/utils";

type BackgroundStylePickerProps = {
  open: boolean;
  value: BackgroundId;
  onChange: (value: BackgroundId) => void;
  onClose: () => void;
};

export default function BackgroundStylePicker({
  open,
  value,
  onChange,
  onClose,
}: BackgroundStylePickerProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex items-center gap-2 overflow-x-auto px-3 py-3"
        >
          <motion.div whileTap={{ scale: 0.94 }}>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              aria-label="Đóng chọn nền"
              onClick={onClose}
              className="size-9 shrink-0 rounded-lg"
            >
              <ChevronLeft className="size-5" />
            </Button>
          </motion.div>

          <motion.div whileTap={{ scale: 0.94 }}>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              aria-label="Không dùng nền"
              onClick={() => onChange("none")}
              className={cn(
                "size-9 shrink-0 rounded-lg",
                value === "none" && "ring-2 ring-primary ring-offset-2 ring-offset-background"
              )}
            >
              <Ban className="size-5 text-muted-foreground" />
            </Button>
          </motion.div>

          {BACKGROUND_PRESETS.map((preset) => (
            <motion.button
              key={preset.id}
              type="button"
              aria-label={`Chọn nền ${preset.id}`}
              whileTap={{ scale: 0.94 }}
              onClick={() => onChange(preset.id)}
              className={cn(
                "size-8 shrink-0 rounded-lg transition-shadow",
                preset.className,
                value === preset.id &&
                  "ring-1 ring-white ring-offset-1 ring-offset-transparent"
              )}
            />
          ))}

          <motion.div whileTap={{ scale: 0.94 }}>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              aria-label="Xem thêm kiểu nền"
              className="size-9 shrink-0 rounded-lg"
            >
              <LayoutGrid className="size-5" />
            </Button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
