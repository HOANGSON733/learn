"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import BlogDetailContent from "./detail/BlogDetailContent";
import BlogDetailHero from "./detail/BlogDetailHero";
import BlogDetailSidebar from "./detail/BlogDetailSidebar";
import BlogDetailTableOfContents from "./detail/BlogDetailTableOfContents";

export default function BlogDetail() {
  return (
    <section className="mx-auto w-full px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <Link
        href="/blog"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to blog
      </Link>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_280px]">
        <article className="space-y-8">
          <BlogDetailHero />

          <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
            <BlogDetailTableOfContents />
            <BlogDetailContent />
          </div>
        </article>

        <BlogDetailSidebar />
      </div>
    </section>
  );
}
