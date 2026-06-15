"use client";

import Image from "next/image";

import { Button } from "@/src/components/ui/button";
import ThinkingModal from "@/src/layouts/public/new-feed/header/modal/ThinkingModal";

const avatarUrl =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80";

const iconUrls = {
  liveVideo: "https://static.xx.fbcdn.net/rsrc.php/yE/r/f0XMdTi7eQy.webp",
  photo: "https://static.xx.fbcdn.net/rsrc.php/yX/r/8_VnccIZfRa.webp",
  reels: "https://static.xx.fbcdn.net/rsrc.php/yb/r/DgIQti9Y0Xv.webp",
} as const;

const actions = [
  { label: "Video trực tiếp", src: iconUrls.liveVideo },
  { label: "Ảnh/video", src: iconUrls.photo },
  { label: "Thước phim", src: iconUrls.reels },
] as const;

function FeedIcon({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="size-6 object-contain" />;
}

export default function HeaderLayout() {
  return (
    <div className="mx-auto flex w-full max-w-[680px] items-center gap-3 rounded-xl bg-card p-3 text-card-foreground shadow-sm ring-1 ring-border/70">
      <Image
        src={avatarUrl}
        alt="Avatar"
        width={40}
        height={40}
        className="block size-10 shrink-0 rounded-full object-cover"
      />

      <ThinkingModal
        avatarUrl={avatarUrl}
        trigger={
          <Button
            type="button"
            variant="secondary"
            className="h-10 min-w-0 flex-1 justify-start rounded-full px-4 text-[15px] leading-none font-normal text-muted-foreground"
          >
            Ngọc ơi, bạn đang nghĩ gì thế?
          </Button>
        }
      />

      <div className="flex shrink-0 items-center gap-0.5">
        {actions.map(({ label, src }) => (
          <Button
            key={label}
            type="button"
            variant="ghost"
            size="icon"
            aria-label={label}
            className="size-10 shrink-0 rounded-full"
          >
            <FeedIcon src={src} alt="" />
          </Button>
        ))}
      </div>
    </div>
  );
}
