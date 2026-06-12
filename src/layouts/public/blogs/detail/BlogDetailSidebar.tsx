import { Bookmark, FileText, MessageCircle, Share2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

import { relatedPosts } from "./blog-detail-data";
import { Dock, DockIcon } from "@/src/components/ui/dock";

export default function BlogDetailSidebar() {
  return (
    <aside className="space-y-6 xl:sticky xl:top-24 xl:h-fit">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Get Started with Our Solution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <ul className="space-y-2">
            <li>• Save 40% time with automation</li>
            <li>• Pre-built system ready to use</li>
            <li>• Easy drag-and-drop workflow</li>
          </ul>
          <div className="space-y-2">
            <button className="w-full rounded-xl bg-primary px-4 py-2 font-medium text-primary-foreground transition hover:opacity-90">
              Get Started
            </button>
            <button className="w-full rounded-xl border px-4 py-2 font-medium transition hover:bg-muted">
              Learn more
            </button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Summarize with AI</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {["A", "S", "C", "M"].map((item) => (
            <button key={item} className="grid size-10 place-items-center rounded-full border text-sm font-semibold transition hover:bg-muted">
              {item}
            </button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Share</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {[Bookmark, Share2, MessageCircle, FileText].map((Icon, index) => (
            <Dock key={index} className="size-10">
              <DockIcon>
                <Icon />
              </DockIcon>
            </Dock>  
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Related Posts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {relatedPosts.map((post) => (
            <a
              key={post}
              href="#"
              className="block rounded-xl border px-4 py-3 text-muted-foreground transition hover:border-primary/40 hover:bg-muted hover:text-foreground"
            >
              {post}
            </a>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
}
