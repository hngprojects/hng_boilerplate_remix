import { dummyArticles } from "./dummy-articles";

export interface Article {
  id: string;
  title: string;
  description: string;
  profileImage: string;
  name: string;
  time: string;
  creationDate: string;
  image: string;
  link: string;
  tag: string;
}

export const fetchArticles = async (
  page: number,
  pageSize: number,
): Promise<Article[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const articles = dummyArticles.slice(startIndex, endIndex);

    return articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
