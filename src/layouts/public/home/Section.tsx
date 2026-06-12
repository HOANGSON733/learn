import Link from "next/link";

import { Button } from "@/src/components/ui/button";
import { InteractiveGridPattern } from "@/src/components/ui/interactive-grid-pattern";

export default function Section() {
    return (
        <section className="relative left-1/2 h-[calc(100svh-4rem)] w-screen -translate-x-1/2 overflow-x-hidden">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                <InteractiveGridPattern
                    responsive
                    width={62}
                    height={62}
                    className="border-0"
                    squaresClassName="stroke-muted-foreground/25"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/70 via-background/30 to-background/70" />

                <div className="relative z-10 flex max-w-7xl flex-col items-center gap-6 px-6 text-center">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-7xl lg:leading-tight">
                        The React Framework for the Web
                    </h1>
                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Used by some of the world&apos;s largest companies, Next.js enables you to
                        create high-quality web applications with the power of React components.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Button size="lg" className="min-w-30 h-12" asChild>
                            <Link href="/doc">Get started</Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="min-w-30 h-12 border-foreground/30 bg-background/50 backdrop-blur-sm hover:bg-background/80"
                            asChild
                        >
                            <Link href="/blog">Learn Next.js</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}