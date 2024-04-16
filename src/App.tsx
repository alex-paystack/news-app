import { NewsList } from "./components/news-list/NewsList";
import news from "./data/newsSource.json";
import { HotNews } from "./components/hot-news/HotNews";

import "./App.css";

function App() {
  return (
    <div className="app">
      <main className="main">
        <NewsList news={news} />
      </main>
      <aside className="sidebar">
        <HotNews news={news} />
      </aside>
    </div>
  );
}

export default App;
