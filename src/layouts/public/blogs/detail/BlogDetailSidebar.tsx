import { Bookmark, FileText, Link, MessageCircle, Share2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

import { relatedPosts } from "./blog-detail-data";
import { Dock, DockIcon } from "@/src/components/ui/dock";
import { Button } from "@/src/components/ui/button";

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
          <div className="flex flex-col gap-3">
            <Button className="w-full rounded-xl h-11 font-medium">
              Get Started
            </Button>
            <Button variant="outline" className="w-full rounded-xl h-11 font-medium">
              Learn More
            </Button>

          </div>
        </CardContent>
      </Card >

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

      <Card className="w-full max-w-sm gap-0">
        <CardHeader className="pb-0! pt-0!">
          <CardTitle>Share</CardTitle>
        </CardHeader>

        <CardContent className=" pt-0">
          <Dock className=" mx-auto rounded-2xl border bg-background p-2">
            {[Bookmark, Share2, MessageCircle, FileText].map((Icon, index) => (
              <DockIcon
                key={index}
                className="rounded-xl hover:bg-accent"
              >
                <Icon className="size-5" />
              </DockIcon>
            ))}
          </Dock>
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
    </aside >
  );
}
