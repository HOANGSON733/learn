import { Heart, MessageCircle, MoreHorizontal, Share2, ThumbsUp, X } from "lucide-react";
import { Card } from "@/src/components/ui/card";
import { Post } from "./postData";
import { formatRelativeTime } from "./time";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="mx-auto w-full max-w-[680px] border border-border/70 bg-background p-0 text-zinc-100 shadow-2xl shadow-black/30">
      <div className="flex items-start justify-between gap-4 px-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="relative size-10 rounded-full border-2 border-blue-500 p-0.5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="size-full rounded-full object-cover"
            />
          </div>

          <div className="leadi ng-tight">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-foreground">
                {post.author.name}
              </p>

              {post.author.isFollowing && (
                <span className="text-blue-400">· Theo dõi</span>
              )}
            </div>

            <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
              <span>{post.author.time ?? formatRelativeTime(post.createdAt)}</span>
              <span>·</span>
              <span>🌐</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-zinc-400">
          <button className="rounded-full p-1.5 hover:bg-white/5">
            <MoreHorizontal className="size-5" />
          </button>

          <button className="rounded-full p-1.5 hover:bg-white/5">
            <X className="size-5" />
          </button>
        </div>
      </div>

      <div className="px-4 py-3 text-2xl text-foreground">
        {post.content}
      </div>

      <div className="overflow-hidden bg-[#8a8a8a]">
        <div className="mx-auto max-w-[460px]">
          <img
            src={post.media}
            alt="Post media"
            className="h-[560px] w-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-3 text-sm text-zinc-300">
        <span className="font-medium text-foreground">
          {post.stats.reactions}
        </span>

        <div className="flex items-center gap-4">
          <span>{post.stats.comments} bình luận</span>
          <span>{post.stats.shares} lượt chia sẻ</span>
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
    <button type="button" className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/5 hover:text-white" >
      <Icon className="size-4" />
      {label}
    </button>);
}