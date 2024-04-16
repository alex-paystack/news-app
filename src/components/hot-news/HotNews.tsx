import { NewsEntry } from "../../types";
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineTime,
  TimelineContent,
} from "../timeline/Timeline";
import { sortNews } from "../../utils/sortNews";
import { getFormattedTime } from "../../utils/formatDateTime";

export function HotNews({ news }: { news: NewsEntry[] }) {
  // Consider the five most recent items as the hottest news
  const hotNews = sortNews(news, {
    criterion: "timestamp",
    order: "descending",
  }).slice(0, 5);

  return (
    <div>
      <h3>Hot News 🔥</h3>
      <Timeline>
        {hotNews.map((news) => {
          const splitTitle = news.title.split(":");

          return (
            <TimelineItem key={news.id}>
              <TimelineDot />
              <TimelineTime>{getFormattedTime(news.timestamp)}</TimelineTime>
              <TimelineContent>
                {splitTitle.length > 1 ? (
                  <>
                    <span className="news-tag">{splitTitle[0]}</span>
                    <span> | {splitTitle[1]}</span>
                  </>
                ) : (
                  <span>{splitTitle[0]}</span>
                )}
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
}
