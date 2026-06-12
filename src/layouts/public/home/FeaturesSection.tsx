import { Code2, Globe, Layers, Shield, Sparkles, Zap } from "lucide-react";

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card";

const features = [
    {
        icon: Zap,
        title: "Instant Refresh",
        description:
            "See changes the moment you save. Fast Refresh keeps component state while you iterate.",
    },
    {
        icon: Layers,
        title: "Flexible Rendering",
        description:
            "Choose static, server, or client rendering per route — optimized for speed and SEO.",
    },
    {
        icon: Globe,
        title: "Edge-Ready",
        description:
            "Deploy globally with a single command. Your app runs close to users, everywhere.",
    },
    {
        icon: Shield,
        title: "Secure by Default",
        description:
            "Built-in protections for common web vulnerabilities, with sensible defaults out of the box.",
    },
    {
        icon: Code2,
        title: "TypeScript Native",
        description:
            "First-class TypeScript support with auto-generated types and zero extra configuration.",
    },
    {
        icon: Sparkles,
        title: "Modern DX",
        description:
            "File-based routing, API routes, and a dev experience designed to keep you in flow.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="w-full px-6 py-20 md:px-16 md:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
                        Features
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Everything you need to build
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                        From local development to global production — a complete toolkit for modern
                        web applications.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <Card
                            key={feature.title}
                            className="transition-colors hover:bg-muted/40"
                        >
                            <CardHeader>
                                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <feature.icon className="size-5" />
                                </div>
                                <CardTitle className="text-base font-semibold">
                                    {feature.title}
                                </CardTitle>
                                <CardDescription className="leading-relaxed">
                                    {feature.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
