"use client";

import { useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import ThinkingModal from "@/src/layouts/public/new-feed/header/modal/ThinkingModal";

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
  const { data: session } = useSession();

  const avatarUrl = session?.user?.image ?? "";
  const userName = session?.user?.name ?? "Bạn";

  return (
    <div className="mx-auto flex w-full max-w-[680px] items-center gap-3 rounded-xl bg-card p-3 text-card-foreground shadow-sm ring-1 ring-border/70">
      <Avatar className="size-10 shrink-0">
        <AvatarImage src={avatarUrl} alt={userName} />
        <AvatarFallback>{userName.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>

      <ThinkingModal
        avatarUrl={avatarUrl}
        trigger={
          <Button
            type="button"
            variant="secondary"
            className="h-10 min-w-0 flex-1 justify-start rounded-full px-4 text-[15px] leading-none font-normal text-muted-foreground"
          >
            {userName}, bạn đang nghĩ gì thế?
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