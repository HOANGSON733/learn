import HeaderLayout from "./header/HeaderLayout";
import PostCard from "./layout/PostCard";
import { posts } from "./layout/postData";

export default function NewFeedLayout() {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-4 py-6">
      <HeaderLayout />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
