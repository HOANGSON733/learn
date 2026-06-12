import { Marquee } from "@/src/components/ui/marquee";
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
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-muted/90 to-transparent sm:w-24" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-muted/90 to-transparent sm:w-24" />
                    <Marquee pauseOnHover className="[--duration:25s] [--gap:0.75rem]">
                        {highlights.map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-border/80 bg-background px-4 py-1.5 text-sm text-muted-foreground"
                            >
                                {item}
                            </span>

                        ))}

                    </Marquee>

                </div>
            </div>
        </section>
    );
}
