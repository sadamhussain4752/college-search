'use client';
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function LatestArticles() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const querySnapshot = await getDocs(collection(db, "articles"));

        if (querySnapshot.empty) {
          setArticles([]);
          return;
        }

        const articlesList = querySnapshot.docs.map((doc) => {
          const data = doc.data() || {};
          return {
            id: doc.id,
            title: data.title || "Untitled Article",
            description: data.description || "No description available.",
            author: data.author || "Unknown Author",
            category: data.category || "Uncategorized",
            url: data.url || "#",
            readTime: data.readTime || "",
            type: data.type || "default_article",
            date: data.date
              ? data.date.toDate
                ? data.date.toDate()
                : new Date(data.date)
              : null,
          };
        });

        const sortedArticles = articlesList.sort((a, b) => {
          const dateA: any = a.date ? new Date(a.date) : 0;
          const dateB: any = b.date ? new Date(b.date) : 0;
          return dateB - dateA;
        });

        setArticles(sortedArticles);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError("Failed to load articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (!isClient) return null;

  if (loading) return <p className="text-center text-gray-600">Loading articles...</p>;
  if (error) return <p className="text-center text-red-600 font-medium">{error}</p>;
  if (articles.length === 0) return <p className="text-center text-gray-600">No articles found.</p>;

  // Helper to choose color gradient based on article type
  const getGradient = (type: any) => {
    switch (type) {
      case "tech":
        return "from-blue-600 to-cyan-400";
      case "lifestyle":
        return "from-amber-500 to-yellow-300";
      case "business":
        return "from-emerald-500 to-green-300";
      default:
        return "from-indigo-500 to-purple-500";
    }
  };

  return (
    <div className="mx-auto px-1 py-10">
    <h3 className="text-xl font-bold text-start text-gray-800 mb-4">
        Latest Articles
      </h3>

      <div className="grid gap-6 sm:grid-cols-6 lg:grid-cols-4 justify-start content-start items-start">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col overflow-hidden"
          >
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <div
                className={`h-40 flex items-end justify-between p-4 text-white bg-gradient-to-br ${getGradient(
                  article.type
                )}`}
              >
                <div>
                  <span className="bg-black/30 backdrop-blur-sm text-xs px-2 py-1 rounded-md">
                    {article.category}
                  </span>
                  <p className="text-sm mt-2 text-gray-100">
                    {article.date
                      ? new Date(article.date).toLocaleDateString()
                      : "No date"}
                    {article.readTime && (
                      <b className="font-semibold">, {article.readTime}</b>
                    )}
                  </p>
                </div>
              </div>
            </a>

            <div className="flex flex-col gap-2 p-4 flex-grow">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-all duration-300 ease-in-out line-clamp-2 leading-snug hover:underline"
              >
                {article.title}
              </a>

              <span className="text-sm text-gray-600 leading-relaxed">
                {article.description}
              </span>
              <b className="text-xs text-gray-500">By - {article.author}</b>

              <a
                href={article.url}
                className="text-blue-600 font-medium text-sm hover:underline mt-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
