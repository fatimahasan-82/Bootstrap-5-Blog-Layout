export interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}