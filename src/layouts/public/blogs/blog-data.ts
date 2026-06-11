export type BlogCategory = {
  id: string;
  label: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  image?: string;
  excerpt: string;
};

export const blogCategories: BlogCategory[] = [
  { id: "all", label: "All" },
  { id: "design", label: "Design" },
  { id: "development", label: "Development" },
  { id: "marketing", label: "Marketing" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "how-to-design",
    slug: "how-to-design",
    title: "How to design a website from scratch",
    date: "May 20, 2024",
    category: "design",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "A practical guide to planning layouts, choosing typography, and building a clean visual system.",
  },
  {
    id: "best-tools",
    slug: "best-tools",
    title: "The best tools for web development and design",
    date: "June 12, 2024",
    category: "development",
    excerpt:
      "A curated list of tools that help teams ship faster, collaborate better, and keep quality high.",
  },
  {
    id: "marketing-traffic",
    slug: "marketing-traffic",
    title: "How to market your website and get more traffic",
    date: "July 5, 2024",
    category: "marketing",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Learn the basics of content strategy, SEO, and distribution to grow your website audience.",
  },
  {
    id: "future-web",
    slug: "future-web",
    title: "The future of web development and design",
    date: "August 18, 2024",
    category: "development",
    excerpt:
      "Explore the trends shaping modern web experiences, from AI workflows to component-driven systems.",
  },
];
