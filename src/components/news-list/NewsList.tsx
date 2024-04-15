import { useEffect, useState } from "react";

import { NewsEntry } from "../../types";
import { sortNews } from "../../utils/sortNews";
import { getElementHeightWithMargin } from "../../utils/dom";
import image from '../../assets/image.avif';

import "./news-list.css";

// TODO: Clean up image loading
export function NewsList({ news }: { news: NewsEntry[] }) {
  const sortedNews = sortNews(news, {
    criterion: "popularity",
    order: "descending",
  });

  const [visibleItems, setVisibleItems] = useState(sortedNews.length);

  // Scale the number of news items shown based on window height
  useEffect(() => {
    const featuredNews = document.getElementById("featured-news");
    const newsItem = document.getElementById("news-item-0");
    const newsItemHeight = getElementHeightWithMargin(newsItem as HTMLElement);

    const getAvailableNewsListHeight = () => {
      return window.innerHeight - (featuredNews?.offsetHeight || 0);
    };

    const getVisibleItemsCount = () => {
      const count = Math.floor(getAvailableNewsListHeight() / newsItemHeight);

      // if the item count ever becomes zero or less, return 1 so we can at least show the featured article
      return count > 0 ? count : 1;
    };

    setVisibleItems(getVisibleItemsCount());

    const handleResize = () => setVisibleItems(getVisibleItemsCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [firstNewsEntry, ...otherNews] = sortedNews.slice(0, visibleItems);

  return (
    <div className="news-list">
      <div className="featured-news" id="featured-news">
        <img
          src={image}
          alt="Rescue after fatal avalanche in Austria was difficult due to the threat of new avalanches"
          height="400"
        />
        <div className="title">
          <h2>{firstNewsEntry.title}</h2>
        </div>
      </div>
      <div>
        <ul>
          {otherNews.map((news, index) => {
            const splitTitle = news.title.split(":");
            return (
              <li key={news.id} id={`news-item-${index}`}>
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
        {visibleItems < sortedNews.length && (
          <div className="load-all-news">
            <button onClick={() => setVisibleItems(sortedNews.length)}>
              Load All News
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
