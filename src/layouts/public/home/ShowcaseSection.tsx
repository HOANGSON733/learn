import {
    Marquee,
    MarqueeContent,
    MarqueeFade,
    MarqueeItem,
} from "@/src/components/kibo-ui/marquee";
// import { Marquee } from "@/src/components/ui/marquee";
import { NumberTicker } from "@/src/components/ui/number-ticker";
import { ProgressiveBlur } from "@/src/components/ui/progressive-blur";

const stats = [
    { value: 3, suffix: "M+", label: "Weekly downloads", decimalPlaces: 0, },
    { value: 130, suffix: "K+", label: "GitHub stars", decimalPlaces: 0, },
    { value: 99.9, suffix: "%", label: "Uptime SLA", decimalPlaces: 1, },
    { value: 190, suffix: "+", label: "Countries served", decimalPlaces: 0, },
];

const highlights = [
    "Server Components",
    "App Router",
    "Image Optimization",
    "Font Optimization",
    "Middleware",
    "API Routes",
];

export default function ShowcaseSection() {
    return (
        <section className="w-full border-y border-border/60 bg-muted/30 px-6 py-20 md:px-16 md:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
                        Trusted at scale
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Built for teams of every size
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Startups, enterprises, and open-source projects rely on the same foundation
                        to ship faster with confidence.
                    </p>
                </div>

                <div className="mb-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                                <NumberTicker value={stat.value} decimalPlaces={stat.decimalPlaces} />
                                {stat.suffix}
                            </p>

                            <p className="mt-2 text-sm text-muted-foreground">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="relative">
                    <Marquee>
                        <MarqueeContent speed={40}>
                            {highlights.map((highlight, idx) => (
                                <MarqueeItem
                                    key={highlight + idx}
                                    className="mx-2 flex items-center">
                                    <span
                                        className="rounded-full flex items-center justify-center border border-border/80 bg-background px-5 py-5 text-sm text-muted-foreground h-7"
                                    >
                                        {highlight}
                                    </span>
                                </MarqueeItem>
                            ))}
                        </MarqueeContent>
                        <MarqueeFade side="left" />
                        <MarqueeFade side="right" />
                    </Marquee>
                    <Marquee className="mt-5">
                        <MarqueeContent direction="right" speed={40}>
                            {highlights.map((highlight, idx) => (
                                <MarqueeItem
                                    key={highlight + idx}
                                    className="mx-2 flex items-center">
                                    <span
                                        className="rounded-full flex items-center justify-center border border-border/80 bg-background px-5 py-5 text-sm text-muted-foreground h-7"
                                    >
                                        {highlight}
                                    </span>
                                </MarqueeItem>
                            ))}
                        </MarqueeContent>
                        <MarqueeFade side="right" />
                        <MarqueeFade side="left" />
                    </Marquee>
                </div>
            </div>
        </section>
    );
}