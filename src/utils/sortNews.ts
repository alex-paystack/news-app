import { NewsEntry } from "../types";

type SortNewsOptions = {
  criterion: "popularity" | "timestamp";
  order?: "ascending" | "descending";
};

function isNumeric(value: unknown) {
  return !Number.isNaN(value)
}

export function sortNews(news: NewsEntry[], options: SortNewsOptions) {
  const newsCopy = [...news];

  newsCopy.sort((a, b) => {
    switch (options.criterion) {
      case "popularity": {
        const popularityA = Number(a.popularity);
        const popularityB = Number(b.popularity);

        if (isNumeric(popularityA) && isNumeric(popularityB)) {
          return popularityA - popularityB;
        }

        return 0;
      }
      case "timestamp": {
        if (!(a.timestamp && b.timestamp)) {
          return 0
        }
        const timestampA = new Date(a.timestamp).getTime();
        const timestampB = new Date(b.timestamp).getTime();

        return timestampA - timestampB;
      }
      default:
        return 0;
    }
  });

  return options.order === "ascending" ? newsCopy : newsCopy.reverse();
}
