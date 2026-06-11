type BlogCategoryListProps = {
  categories: { id: string; label: string }[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
};

export default function BlogCategoryList({
  categories,
  activeCategory,
  onSelectCategory,
}: BlogCategoryListProps) {
  return (
    <div className="flex flex-wrap gap-2 lg:block lg:space-y-3 lg:gap-0 lg:h-[calc(100vh-10rem)] lg:overflow-y-auto">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelectCategory(category.id)}
            className={`rounded-full border px-4 py-2 text-left text-sm transition lg:block lg:w-full lg:rounded-none lg:border-0 lg:px-0 lg:py-0 ${
              isActive
                ? "border-primary bg-primary/10 font-semibold text-foreground"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
