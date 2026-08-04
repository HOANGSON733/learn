"use client";

import { useEffect, useState } from "react";
import HeaderLayout from "./header/HeaderLayout";
import PostCard from "./layout/PostCard";
import { posts as initialPosts, Post } from "./layout/postData";

const AUTO_POST_INTERVAL = 10 * 1000;

// Dữ liệu dùng để tự tạo bài
const autoPostContents = [
  "✨ Hôm nay là một ngày tuyệt vời để bắt đầu những điều mới.",
  "☕ Một tách cà phê và một chút bình yên cho ngày mới.",
  "🌸 Những điều nhỏ bé đôi khi lại mang đến niềm vui lớn.",
  "🌅 Mỗi ngày mới là một cơ hội để trở nên tốt hơn.",
  "💪 Cố gắng hôm nay sẽ tạo nên thành quả ngày mai.",
  "❤️ Hãy luôn dành thời gian cho những điều khiến bạn hạnh phúc.",
  "🌿 Cuộc sống sẽ đẹp hơn khi chúng ta biết trân trọng hiện tại.",
  "📸 Lưu lại những khoảnh khắc đẹp của cuộc sống.",
];

const autoPostImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
];

const autoPostAuthors = [
  {
    name: "Người dùng mới",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Nguyễn Minh",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Linh Nguyễn",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  },
];

function createAutoPost(): Post {
  const randomContent =
    autoPostContents[
    Math.floor(Math.random() * autoPostContents.length)
    ];

  const randomImage =
    autoPostImages[
    Math.floor(Math.random() * autoPostImages.length)
    ];

  const randomAuthor =
    autoPostAuthors[
    Math.floor(Math.random() * autoPostAuthors.length)
    ];

  return {
    id: Date.now(),

    author: {
      name: randomAuthor.name,
      avatar: randomAuthor.avatar,
      isFollowing: false,
    },

    content: randomContent,

    media: randomImage,

    stats: {
      reactions: "0",
      comments: 0,
      shares: 0,
    },

    createdAt: new Date().toISOString(),
  };
}

export default function NewFeedLayout() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  useEffect(() => {
    // Lấy dữ liệu đã lưu
    const savedPosts = localStorage.getItem("new-feed-posts");

    if (savedPosts) {
      try {
        const parsedPosts: Post[] = JSON.parse(savedPosts);

        setPosts(parsedPosts);
      } catch (error) {
        console.error(
          "Không thể đọc dữ liệu posts:",
          error
        );
      }
    }
  }, []);

  useEffect(() => {
    const addAutoPost = () => {
      const newPost = createAutoPost();

      setPosts((currentPosts) => {
        const updatedPosts = [
          newPost,
          ...currentPosts,
        ];

        localStorage.setItem(
          "new-feed-posts",
          JSON.stringify(updatedPosts)
        );

        return updatedPosts;
      });

      localStorage.setItem(
        "new-feed-last-created",
        Date.now().toString()
      );
    };

    const checkAutoPost = () => {
      const lastCreated = localStorage.getItem(
        "new-feed-last-created"
      );

      const now = Date.now();

      // Nếu chưa từng tạo bài
      if (!lastCreated) {
        localStorage.setItem(
          "new-feed-last-created",
          now.toString()
        );

        return;
      }

      const elapsed =
        now - Number(lastCreated);

      // Đã đủ 10 phút
      if (elapsed >= AUTO_POST_INTERVAL) {
        addAutoPost();
      }
    };

    // Kiểm tra ngay khi mở trang
    checkAutoPost();

    // Kiểm tra mỗi 1 phút
    const interval = setInterval(
      checkAutoPost,
      60 * 1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-4 px-4 py-6">
      <HeaderLayout /> 

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}