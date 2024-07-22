import { useEffect, useState } from "react";

import LatestArticle from "~/components/article/LatestArticle";
import Button from "~/components/customButton/customButton";
import { Article, fetchArticles } from "./api-call";

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 5;

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        const fetchedArticles = await fetchArticles(page, itemsPerPage);
        if (fetchedArticles.length === 0) {
          setHasMore(false);
        } else {
          setArticles((previousArticles) => {
            const articlesSet = new Set(
              previousArticles.map((article) => article.id),
            );
            const uniqueFetchedArticles = fetchedArticles.filter(
              (article) => !articlesSet.has(article.id),
            );
            return [...previousArticles, ...uniqueFetchedArticles];
          });
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, [page]);

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((previousPage) => previousPage + 1);
    }
  };

  return (
    <div className="">
      <div className="flex h-auto w-full flex-col gap-6 bg-background px-6 py-9 text-muted-foreground lg:items-center">
        <h1 className="text-[28px] font-bold text-neutral-1">
          Latest Articles
        </h1>
        <div>
          <ul className="flex flex-col gap-[10px]">
            {articles.map((article, index) => (
              <li
                key={`${article.id}-${index}`}
                className="border-[#525252] lg:border-b"
              >
                <LatestArticle article={article} />
              </li>
            ))}
          </ul>
        </div>
        <Button
          onClick={handleLoadMore}
          isDisabled={!hasMore || loading}
          isLoading={loading}
          variant="default"
          size="lg"
          className="w-full lg:w-fit"
        >
          {loading ? "Loading..." : "Load More"}
        </Button>
      </div>
    </div>
  );
}
