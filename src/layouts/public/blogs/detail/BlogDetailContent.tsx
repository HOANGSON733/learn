import { Card, CardContent } from "@/src/components/ui/card";

export default function BlogDetailContent() {
  return (
    <Card>
      <CardContent className="space-y-6 p-6 sm:p-8">
        <p className="text-base leading-8 text-muted-foreground">
          Building a SaaS product today is more complicated than ever. Speed,
          scalability, and user experience are no longer optional — they are
          essential. That means a robust design system, a reliable component
          library, and a workflow that helps teams ship faster without
          sacrificing quality.
        </p>

        <p className="text-base leading-8 text-muted-foreground">
          That&apos;s where <span className="font-semibold text-foreground">ShadcnSpace</span>
          comes in. It gives teams a modern foundation to move quickly, while
          keeping the product polished and consistent.
        </p>

        <section id="what-is-shadcnspace" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">What is ShadcnSpace?</h2>
          <p className="leading-8 text-muted-foreground">
            ShadcnSpace is a modern platform built to help product teams design,
            build, and launch beautiful software with a clean system and reusable
            UI patterns.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Pre-built UI components</li>
            <li>Scalable architecture</li>
            <li>Ready-to-use layouts</li>
            <li>Developer-friendly workflow</li>
          </ul>
        </section>

        <section id="key-features-of-shadcnspace" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Key Features of ShadcnSpace</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["1. Built-in, Ready-Made UI Components", "Reusable components help teams ship faster and stay consistent."],
              ["2. Rapid Development Setup", "Simple setup and clear structure keep teams focused on building features."],
              ["3. Built for Scalability", "Flexible patterns make it easy to grow from MVP to large-scale products."],
              ["4. Seamless Integrations", "Payment, analytics, auth, and third-party APIs work smoothly together."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border bg-muted/20 p-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="shadcnspace-vs-traditional-saas" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">ShadcnSpace vs Traditional SaaS Development</h2>
          <div className="overflow-hidden rounded-2xl border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/60 text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">Feature</th>
                  <th className="px-4 py-3 font-medium">Traditional Approach</th>
                  <th className="px-4 py-3 font-medium">ShadcnSpace</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Setup Time", "Weeks", "Hours"],
                  ["UI Development", "From scratch", "Pre-built"],
                  ["Scalability", "Complex", "Built-in"],
                  ["Developer Effort", "High", "Optimized"],
                ].map(([feature, traditional, shadcn]) => (
                  <tr key={feature} className="border-t">
                    <td className="px-4 py-3 font-medium">{feature}</td>
                    <td className="px-4 py-3 text-muted-foreground">{traditional}</td>
                    <td className="px-4 py-3 text-muted-foreground">{shadcn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="final-thoughts" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Final Thoughts</h2>
          <p className="leading-8 text-muted-foreground">
            ShadcnSpace is more than just a development tool — it is a productivity
            multiplier. In a world where speed defines success, having the right
            platform can be the difference between launching fast and staying behind.
          </p>
          <p className="font-semibold text-foreground">
            Your ideas deserve to go live faster. ShadcnSpace helps you make that happen.
          </p>
        </section>
      </CardContent>
    </Card>
  );
}
