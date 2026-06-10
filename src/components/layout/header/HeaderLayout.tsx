import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/src/components/ui/navigation-menu";
import { AnimatedThemeToggler } from "@/src/components/ui/animated-theme-toggler";

export default function HeaderLayout() {
    return (
        <header className="border-b bg-background/95 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold text-blue-600"
                >
                    Logo
                </Link>

                {/* Menu */}
                <NavigationMenu>
                    <NavigationMenuList className="gap-2">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/"
                                    className="px-4 py-2 font-medium hover:text-primary"
                                >
                                    Home
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Services
                            </NavigationMenuTrigger>

                            <NavigationMenuContent>
                                <div className="w-[220px] p-2">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/doc"
                                            className="block rounded-md p-2 hover:bg-slate-100"
                                        >
                                            Service 1
                                        </Link>
                                    </NavigationMenuLink>

                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/service-2"
                                            className="block rounded-md p-2 hover:bg-slate-100"
                                        >
                                            Service 2
                                        </Link>
                                    </NavigationMenuLink>

                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/service-3"
                                            className="block rounded-md p-2 hover:bg-slate-100"
                                        >
                                            Service 3
                                        </Link>
                                    </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/about"
                                    className="px-4 py-2 font-medium hover:text-blue-600"
                                >
                                    About
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/contact"
                                    className="px-4 py-2 font-medium hover:text-blue-600"
                                >
                                    Contact
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-2">
                    <AnimatedThemeToggler />
                    {/* Login */}
                    <Link
                        href="/login"
                        className="
                            rounded-md
                            bg-primary
                            px-4
                            py-2
                            text-primary-foreground
                            hover:opacity-90
                            "
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
}