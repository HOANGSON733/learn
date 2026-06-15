import { Heart, MessageCircle, MoreHorizontal, Share2, ThumbsUp, X } from "lucide-react";

import { Card } from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";

const reactions = [
  { icon: ThumbsUp, className: "text-blue-500", label: "Like" },
  { icon: Heart, className: "text-rose-500", label: "Love" },
];

export default function PostCard() {
  return (
    <Card className="mx-auto w-full max-w-[680px] border border-border/70 bg-background p-0 text-zinc-100 shadow-2xl shadow-black/30">
      <div className="flex items-start justify-between gap-4 px-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="relative size-10 rounded-full border-2 border-blue-500 p-0.5">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
              alt="Avatar"
              className="size-full rounded-full object-cover"
            />
          </div>

          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-foreground">Yen Cordova</p>
              <span className="text-blue-400">· Theo dõi</span>
            </div>
            <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
              <span>Hôm qua lúc 22:31</span>
              <span>·</span>
              <span>🌐</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-zinc-400">
          <button type="button" className="rounded-full p-1.5 transition-colors hover:bg-white/5 hover:text-zinc-200">
            <MoreHorizontal className="size-5" />
          </button>
          <button type="button" className="rounded-full p-1.5 transition-colors hover:bg-white/5 hover:text-zinc-200">
            <X className="size-5" />
          </button>
        </div>
      </div>

      <div className="px-4 py-3 text-2xl text-foreground">❄️sfgsfgsfd</div>

      <div className="overflow-hidden bg-[#8a8a8a]">
        <div className="mx-auto max-w-[460px]">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
            alt="Post media"
            className="h-[560px] w-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-3 text-sm text-zinc-300">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1">
            {reactions.map(({ icon: Icon, className, label }) => (
              <span
                key={label}
                className={cn(
                  "inline-flex size-5 items-center justify-center rounded-full bg-white shadow-sm ring-2 ring-[#1f1f1f]",
                  className
                )}
              >
                <Icon className="size-3 fill-current text-white" />
              </span>
            ))}
          </div>
          <span className="font-medium text-foreground">5,7K</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <span className="text-foreground">43 bình luận</span>
          <span className="text-foreground">37 lượt chia sẻ</span>
        </div>
      </div>

      <div className="mx-4 mb-4 h-px bg-white/10" />

      <div className="grid grid-cols-3 gap-2 px-2 pb-3">
        <ActionButton icon={ThumbsUp} label="Thích" />
        <ActionButton icon={MessageCircle} label="Bình luận" />
        <ActionButton icon={Share2} label="Chia sẻ" />
      </div>
    </Card>
  );
}

function ActionButton({ icon: Icon, label }: { icon: typeof ThumbsUp; label: string }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/5 hover:text-white"
    >
      <Icon className="size-4" />
      {label}
    </button>
  );
}