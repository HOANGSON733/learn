import Image from "next/image";
import { CalendarDays, Eye, Flame, User } from "lucide-react";

import { Card, CardContent } from "@/src/components/ui/card";

export default function BlogDetailHero() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="space-y-6 p-0">
        <div className="space-y-4 px-5 pt-6 sm:px-8 sm:pt-8">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Flame className="size-3.5" />
            SaaS / Design / Development
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            ShadcnSpace: Build modern SaaS products with speed and simplicity
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <User className="size-4" />
              by shadcnspace team
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="size-4" />
              Apr 9, 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <Eye className="size-4" />
              8 min read
            </span>
          </div>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted sm:rounded-t-none">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
            alt="Blog detail hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </CardContent>
    </Card>
  );
}
