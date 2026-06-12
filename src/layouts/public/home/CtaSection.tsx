import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/src/components/ui/button";

export default function CtaSection() {
    return (
        <section className="w-full px-6 py-20 md:px-16 md:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-linear-to-br from-primary/5 via-background to-muted/40 px-8 py-16 text-center sm:px-16 sm:py-20">
                    <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-primary/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-primary/5 blur-3xl" />

                    <div className="relative z-10 mx-auto max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Ready to build something great?
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Start a new project in minutes. Explore the docs, browse examples, and
                            deploy to production with one command.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Button size="lg" className="min-w-36 h-12" asChild>
                                <Link href="/doc">
                                    Start building
                                    <ArrowRight className="size-4" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="min-w-36 h-12 border-foreground/30"
                                asChild
                            >
                                <Link href="/blog">View examples</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
