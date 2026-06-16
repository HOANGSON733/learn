import { Heart, ThumbsUp } from "lucide-react";

export const reactions = [
    {
        icon: ThumbsUp,
        className: "text-blue-500",
        label: "Like",
    },
    {
        icon: Heart,
        className: "text-rose-500",
        label: "Love",
    },
];

export const posts = [
    {
        id: 1,
        author: {
            name: "Yen Cordova",
            avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
            isFollowing: true,
            time: "Hôm qua lúc 22:31",
        },
        content: "❄️ Một ngày tuyệt vời để bắt đầu điều mới mẻ.",
        media:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
        stats: {
            reactions: "5,7K",
            comments: 43,
            shares: 37,
        },
    },
    {
        id: 2,
        author: {
            name: "Minh Anh",
            avatar:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
            isFollowing: false,
            time: "2 giờ trước",
        },
        content: "☕ Sáng nay cà phê ngon hơn mọi ngày.",
        media:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
        stats: {
            reactions: "2,1K",
            comments: 12,
            shares: 8,
        },
    },
    {
        id: 3,
        author: {
            name: "Ngọc Trâm",
            avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
            isFollowing: true,
            time: "4 giờ trước",
        },
        content: "🌊 Biển hôm nay đẹp quá!",
        media:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        stats: {
            reactions: "8,2K",
            comments: 67,
            shares: 24,
        },
    },
    {
        id: 4,
        author: {
            name: "Hoàng Nam",
            avatar:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
            isFollowing: false,
            time: "6 giờ trước",
        },
        content: "🚗 Chuyến roadtrip cuối tuần cực chill.",
        media:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        stats: {
            reactions: "3,4K",
            comments: 21,
            shares: 15,
        },
    },
    {
        id: 5,
        author: {
            name: "Thu Hà",
            avatar:
                "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80",
            isFollowing: true,
            time: "8 giờ trước",
        },
        content: "🌸 Mùa hoa nở đẹp quá.",
        media:
            "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1200&q=80",
        stats: {
            reactions: "6,5K",
            comments: 34,
            shares: 19,
        },
    },
    {
        id: 6,
        author: {
            name: "Thanh Tùng",
            avatar:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
            isFollowing: false,
            time: "10 giờ trước",
        },
        content: "💻 Hoàn thành dự án sau 2 tuần cày cuốc.",
        media:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        stats: {
            reactions: "4,9K",
            comments: 52,
            shares: 13,
        },
    },
    {
        id: 7,
        author: {
            name: "Linh Chi",
            avatar:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
            isFollowing: true,
            time: "12 giờ trước",
        },
        content: "🍜 Tô mì này đáng giá 10/10.",
        media:
            "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
        stats: {
            reactions: "1,8K",
            comments: 16,
            shares: 4,
        },
    },
    {
        id: 8,
        author: {
            name: "Quốc Bảo",
            avatar:
                "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=200&q=80",
            isFollowing: false,
            time: "14 giờ trước",
        },
        content: "🏋️ Hoàn thành mục tiêu tập luyện tháng này.",
        media:
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
        stats: {
            reactions: "3,7K",
            comments: 28,
            shares: 11,
        },
    },
    {
        id: 9,
        author: {
            name: "Bảo Ngọc",
            avatar:
                "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&q=80",
            isFollowing: true,
            time: "16 giờ trước",
        },
        content: "📸 Bộ ảnh mới vừa chụp xong.",
        media:
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
        stats: {
            reactions: "9,1K",
            comments: 95,
            shares: 42,
        },
    },
    {
        id: 10,
        author: {
            name: "Hải Đăng",
            avatar:
                "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80",
            isFollowing: false,
            time: "18 giờ trước",
        },
        content: "🌄 Bình minh trên núi thật sự đáng giá.",
        media:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        stats: {
            reactions: "7,3K",
            comments: 48,
            shares: 26,
        },
    },
    {
        id: 11,
        author: {
            name: "Phương Ly",
            avatar:
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=200&q=80",
            isFollowing: true,
            time: "20 giờ trước",
        },
        content: "🎵 Một buổi tối nhẹ nhàng cùng âm nhạc.",
        media:
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
        stats: {
            reactions: "4,4K",
            comments: 31,
            shares: 17,
        },
    },
];
export type Post = (typeof posts)[number];