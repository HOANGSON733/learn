import HeaderLayout from "./header/HeaderLayout";
import PostCard from "./layout/PostCard";

export default function NewFeedLayout() {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-4 py-6">
      <HeaderLayout />
      <PostCard />
    </div>
  );
}
