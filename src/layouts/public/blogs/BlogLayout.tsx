"use client";

import { useMemo, useState } from "react";
import { FileText } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

import BlogCategoryList from "./BlogCategoryList";
import BlogPostCard from "./BlogPostCard";
import { blogCategories, blogPosts } from "./blog-data";

export default function BlogLayout() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="mx-auto w-full px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="space-y-6 rounded-3xl border bg-card p-5 sm:p-6 lg:sticky lg:top-24 lg:h-[calc(100vh-20rem)] lg:overflow-y-hidden">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="size-7 sm:size-8" />
              <h1 className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                Blog Posts
              </h1>
            </div>

            <p className="text-sm leading-6 text-muted-foreground">
              Blog posts are a great way to share your knowledge and expertise with the world.
            </p>
          </div>

          <div className="h-px w-full bg-border" />

          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Categories
            </h2>
            <BlogCategoryList
              categories={blogCategories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>
        </aside>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}

          {filteredPosts.length === 0 ? (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Không có bài viết nào</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Hãy thử chọn danh mục khác để xem các bài viết phù hợp hơn.
              </CardContent>
            </Card>
          ) : null}
        </div>
      </div>
    </section>
  );
}
