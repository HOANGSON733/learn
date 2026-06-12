import Link from "next/link";
import Image from "next/image";
import Logo from "@/src/assets/logo.png";

const productLinks = ["Overview", "Pricing", "Marketplace", "Features", "Integrations"];
const companyLinks = ["About", "Team", "Blog", "Careers", "Contact"];
const supportLinks = ["Help center", "Documentation", "Status", "Community"];
const socialLinks = [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://x.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
];

export default function FooterLayout() {
    return (
        <footer className="border-t border-border/60 bg-background text-sm text-muted-foreground overflow-visible shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 ">
                <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(3,minmax(0,1fr))]">
                    <div className="space-y-5">
                        <Link href="/" className="inline-flex items-center gap-3 text-foreground">
                            <Image src={Logo} alt="Logo" width={40} height={40} />
                            <span className="text-lg font-semibold tracking-tight">Shadcnblocks.com</span>
                        </Link>
                        <p className="max-w-sm leading-7">
                            Finely crafted blocks built with Shadcn UI.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            {socialLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    aria-label={item.label}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-foreground/70 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-foreground hover:text-background"
                                >
                                    {item.label.charAt(0)}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <FooterColumn title="Product" links={productLinks} />
                    <FooterColumn title="Company" links={companyLinks} />
                    <FooterColumn title="Support" links={supportLinks} />
                </div>
            </div>

            <div className="border-t border-border/60">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-6 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <p>© 2026 Shadcnblocks.com. All rights reserved.</p>
                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link href="/terms-and-conditions" className="transition-colors hover:text-foreground">
                            Terms and Conditions
                        </Link>
                        <Link href="/privacy-policy" className="transition-colors hover:text-foreground">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
    return (
        <div className="space-y-5">
            <h2 className="text-base font-semibold text-foreground">{title}</h2>
            <ul className="space-y-3">
                {links.map((link) => (
                    <li key={link}>
                        <Link href={`/${link.toLowerCase()}`} className="transition-colors hover:text-foreground">
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
