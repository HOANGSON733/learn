"use client"
import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Bell, Key, Lock, User, Shield, Star, LogOut, Camera, Loader2 } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export default function ProfileLayout() {
    const { data: session, status, update } = useSession();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState("");

    if (status === "loading") {
        return <div className="container mx-auto px-4 py-6">Loading...</div>;
    }

    if (status === "unauthenticated" || !session) {
        return <div className="container mx-auto px-4 py-6">Please log in.</div>;
        // hoặc redirect: router.push("/login")
    }

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploadError("");
        setIsUploading(true);

        try {
            const formData = new FormData();
            formData.append("avatar", file);

            const res = await fetch("/api/profile/avatar", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) {
                setUploadError(data.message ?? "Đổi ảnh đại diện thất bại.");
                return;
            }

            // Cập nhật session ngay lập tức, không cần đăng xuất/đăng nhập lại
            await update({ image: data.image });
        } catch (err) {
            console.error(err);
            setUploadError("Không thể kết nối máy chủ, vui lòng thử lại.");
        } finally {
            setIsUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    return (
        <div className="container mx-auto px-4 py-6 md:px-6 2xl:max-w-[1400px]">
            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-8 flex items-center gap-6">
                    <div className="relative">
                        <Avatar className="size-20">
                            <AvatarImage src={session.user?.image ?? ""} alt="User" />
                            <AvatarFallback>{session.user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>

                        <button
                            type="button"
                            onClick={handleAvatarClick}
                            disabled={isUploading}
                            className="absolute -bottom-1 -right-1 flex size-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:bg-zinc-900 dark:text-slate-300"
                            aria-label="Đổi ảnh đại diện"
                        >
                            {isUploading ? (
                                <Loader2 className="size-3.5 animate-spin" />
                            ) : (
                                <Camera className="size-3.5" />
                            )}
                        </button>

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/png,image/jpeg,image/webp,image/gif"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold">{session.user?.name}</h1>
                        <p className="text-muted-foreground text-sm">
                            Manage your account settings and preferences
                        </p>
                        {uploadError && (
                            <p className="mt-1 text-sm font-medium text-red-600 dark:text-red-400">
                                {uploadError}
                            </p>
                        )}
                    </div>

                    <Button
                        variant="outline"
                        className="ml-auto"
                        onClick={() => signOut({ callbackUrl: "/login" })}
                    >
                        <LogOut className="mr-2 size-4" />
                        Log out
                    </Button>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="profile" className="space-y-6">
                    <TabsList className="h-auto w-full justify-start gap-6 bg-transparent p-0">
                        <TabsTrigger
                            value="profile"
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                            <User className="mr-2 size-4" />
                            Profile
                        </TabsTrigger>
                        <TabsTrigger
                            value="security"
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                            <Lock className="mr-2 size-4" />
                            Security
                        </TabsTrigger>
                        <TabsTrigger
                            value="notifications"
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                            <Bell className="mr-2 size-4" />
                            Notifications
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="profile" className="space-y-6">
                        <Card className="p-0">
                            <CardContent className="p-6">
                                <h2 className="mb-4 text-lg font-semibold">Profile Details</h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First name</Label>
                                        <Input id="firstName" defaultValue="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last name</Label>
                                        <Input id="lastName" defaultValue="Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            defaultValue="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="role">Role</Label>
                                        <Input id="role" defaultValue="Product Designer" readOnly />
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <Button>Save Changes</Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="p-0">
                            <CardContent className="p-6">
                                <h2 className="mb-4 text-lg font-semibold">
                                    Connected Accounts
                                </h2>
                                <div className="space-y-4">
                                    {["GitHub", "Google", "Twitter"].map((provider) => (
                                        <div
                                            key={provider}
                                            className="flex flex-col items-start justify-between gap-4 py-3 sm:flex-row sm:items-center"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="bg-muted flex size-10 items-center justify-center rounded-full">
                                                    <Star className="text-muted-foreground size-5" />
                                                </div>
                                                <div>
                                                    <p className="font-medium">{provider}</p>
                                                    <p className="text-muted-foreground text-sm">
                                                        {provider === "GitHub"
                                                            ? "Connected"
                                                            : "Not Connected"}
                                                    </p>
                                                </div>
                                            </div>
                                            <Button
                                                variant={provider === "GitHub" ? "outline" : "default"}
                                            >
                                                {provider === "GitHub" ? "Disconnect" : "Connect"}
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="security" className="space-y-6">
                        <Card className="p-0">
                            <CardContent className="p-6">
                                <h2 className="mb-4 text-lg font-semibold">
                                    Security Settings
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                                        <div className="space-y-1">
                                            <p className="font-medium">Two-Factor Authentication</p>
                                            <p className="text-muted-foreground text-sm">
                                                Add an extra layer of security to your account
                                            </p>
                                        </div>
                                        <Button variant="outline">
                                            <Shield className="mr-2 size-4" />
                                            Enable
                                        </Button>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                                            <div className="space-y-1">
                                                <p className="font-medium">Password</p>
                                                <p className="text-muted-foreground text-sm">
                                                    Last changed 3 months ago
                                                </p>
                                            </div>
                                            <Button variant="outline">
                                                <Key className="mr-2 size-4" />
                                                Change
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="p-0">
                            <CardContent className="p-6">
                                <h2 className="mb-4 text-lg font-semibold">Active Sessions</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            device: "MacBook Pro",
                                            location: "San Francisco, CA",
                                            lastActive: "Active now",
                                            current: true,
                                        },
                                        {
                                            device: "iPhone 12",
                                            location: "New York, NY",
                                            lastActive: "2 days ago",
                                            current: false,
                                        },
                                    ].map((session, i) => (
                                        <div
                                            key={i}
                                            className="flex flex-col items-start justify-between gap-3 py-3 sm:flex-row sm:items-center"
                                        >
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <p className="font-medium">{session.device}</p>
                                                    {session.current && (
                                                        <Badge variant="secondary">Current</Badge>
                                                    )}
                                                </div>
                                                <p className="text-muted-foreground text-sm">
                                                    {session.location} • {session.lastActive}
                                                </p>
                                            </div>
                                            {!session.current && (
                                                <Button variant="outline" size="sm">
                                                    Revoke
                                                </Button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="notifications" className="space-y-6">
                        <Card className="p-0">
                            <CardContent className="p-6">
                                <h2 className="mb-4 text-lg font-semibold">
                                    Notification Preferences
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        "Email notifications",
                                        "Push notifications",
                                        "Monthly newsletter",
                                        "Security alerts",
                                    ].map((pref) => (
                                        <div
                                            key={pref}
                                            className="flex flex-col items-start justify-between gap-3 py-3 sm:flex-row sm:items-center"
                                        >
                                            <div className="space-y-1">
                                                <p className="font-medium">{pref}</p>
                                                <p className="text-muted-foreground text-sm">
                                                    Receive notifications about account activity
                                                </p>
                                            </div>
                                            <Button variant="outline">Configure</Button>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}