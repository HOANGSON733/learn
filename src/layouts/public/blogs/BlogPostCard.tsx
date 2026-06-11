"use client";

import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/src/components/ui/card";
import type { BlogPost } from "./blog-data";

type BlogPostCardProps = {
  post: BlogPost;
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="group relative min-h-[320px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-20" aria-label={post.title} />

      {post.image ? (
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
          />

          <div className="absolute inset-0 -translate-y-full bg-black/70 transition-transform duration-500 ease-out group-hover:translate-y-0" />
        </div>
      ) : null}

      <CardContent className="relative z-10 flex h-full flex-col justify-end space-y-3 p-5 transition-colors duration-500 group-hover:text-white">
        <div className="text-sm text-muted-foreground transition-colors duration-500 group-hover:text-white/80">
          {post.date}
        </div>
        <h3 className="text-xl font-semibold leading-snug transition-colors duration-500 group-hover:text-white">
          {post.title}
        </h3>
        <p className="text-sm leading-6 text-muted-foreground transition-colors duration-500 group-hover:text-white/80">
          {post.excerpt}
        </p>
        <div className="pt-2 text-sm font-medium text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          Xem bài viết
        </div>
      </CardContent>
    </Card>
  );
}
