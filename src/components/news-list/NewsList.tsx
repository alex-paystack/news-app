import React from "react";

import { NewsEntry } from "../../types";
import { sortNews } from "../../utils/sortNews";
import "./news-list.css";

export function NewsList({ news }: { news: NewsEntry[] }) {
  const sortedNews = sortNews(news, {
    criterion: "popularity",
    order: "descending",
  });

  const [firstNewsEntry, ...otherNews] = sortedNews;

  return (
    <div className="news-list">
      <div className="featured-news">
        <img
          src="./assets/image.avif"
          alt="Rescue after fatal avalanche in Austria was difficult due to the threat of new avalanches"
        />
        <div className="title">
          <h2>{firstNewsEntry.title}</h2>
        </div>
      </div>
      <ul>
        {otherNews.map((news) => {
          const splitTitle = news.title.split(":");
          return (
            <li key={news.id}>
              {splitTitle.length > 1 ? (
                <>
                  <span className="news-tag">{splitTitle[0]}</span>
                  <span> | {splitTitle[1]}</span>
                </>
              ) : (
                <span>{splitTitle[0]}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
