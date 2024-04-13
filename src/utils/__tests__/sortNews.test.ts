import { sortNews } from "../sortNews";

describe("sortNews", () => {
  const news = [
    {
      id: "1",
      title: "News one",
      popularity: "0.1",
      timestamp: "2023-02-16T07:39:55.793Z",
    },
    {
      id: "2",
      title: "News two",
      popularity: "0.2",
      timestamp: "2023-02-16T22:51:21.660Z",
    },
    {
      id: "3",
      title: "News three",
      popularity: "0.3",
      timestamp: "2023-02-16T11:00:27.508Z",
    },
  ];

  test("it correctly sorts news by popularity in ascending order", () => {
    const sortedNewsAscending = sortNews(news, {
      criterion: "popularity",
      order: "ascending",
    });

    const expected = [
      {
        id: "1",
        title: "News one",
        popularity: "0.1",
        timestamp: "2023-02-16T07:39:55.793Z",
      },
      {
        id: "2",
        title: "News two",
        popularity: "0.2",
        timestamp: "2023-02-16T22:51:21.660Z",
      },
      {
        id: "3",
        title: "News three",
        popularity: "0.3",
        timestamp: "2023-02-16T11:00:27.508Z",
      },
    ];

    expect(sortedNewsAscending).toEqual(expected);
  });

  test("it correctly sorts news by popularity in descending order", () => {
    const sortedNewsDescending = sortNews(news, {
      criterion: "popularity",
      order: "descending",
    });

    const expected = [
      {
        id: "3",
        title: "News three",
        popularity: "0.3",
        timestamp: "2023-02-16T11:00:27.508Z",
      },
      {
        id: "2",
        title: "News two",
        popularity: "0.2",
        timestamp: "2023-02-16T22:51:21.660Z",
      },
      {
        id: "1",
        title: "News one",
        popularity: "0.1",
        timestamp: "2023-02-16T07:39:55.793Z",
      },
    ];

    expect(sortedNewsDescending).toEqual(expected);
  });

  test("it correctly sorts news by timestamp in ascending order", () => {
    const sortedNewsAscending = sortNews(news, {
      criterion: "timestamp",
      order: "ascending",
    });

    const expected = [
      {
        id: "1",
        title: "News one",
        popularity: "0.1",
        timestamp: "2023-02-16T07:39:55.793Z",
      },
      {
        id: "3",
        title: "News three",
        popularity: "0.3",
        timestamp: "2023-02-16T11:00:27.508Z",
      },
      {
        id: "2",
        title: "News two",
        popularity: "0.2",
        timestamp: "2023-02-16T22:51:21.660Z",
      },
    ];

    expect(sortedNewsAscending).toEqual(expected);
  });

  test("it correctly sorts news by timestamp in descending order", () => {
    const sortedNewsDescending = sortNews(news, {
      criterion: "timestamp",
      order: "descending",
    });

    const expected = [
      {
        id: "2",
        title: "News two",
        popularity: "0.2",
        timestamp: "2023-02-16T22:51:21.660Z",
      },
      {
        id: "3",
        title: "News three",
        popularity: "0.3",
        timestamp: "2023-02-16T11:00:27.508Z",
      },
      {
        id: "1",
        title: "News one",
        popularity: "0.1",
        timestamp: "2023-02-16T07:39:55.793Z",
      },
    ];

    expect(sortedNewsDescending).toEqual(expected);
  });
});
