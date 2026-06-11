import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

import { tableOfContents } from "./blog-detail-data";

export default function BlogDetailTableOfContents() {
  return (
    <Card className="h-fit lg:sticky lg:top-24">
      <CardHeader>
        <CardTitle className="text-base">Table of content</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        {tableOfContents.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            className="block text-muted-foreground transition hover:text-foreground"
          >
            {item}
          </a>
        ))}
      </CardContent>
    </Card>
  );
}
