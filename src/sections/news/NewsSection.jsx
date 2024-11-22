import { useState, useEffect } from "react";
import NewsCard from "../../components/NewsCard";

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const res = await fetch(
        "https://server-helloworld-7ybx.onrender.com/api/news"
      );
      const data = await res.json();
      setNews(data);
    };
    getNews();
  }, []);
  return (
    <section className="pb-16 px-4 flex justify-center">
      <div className="max-w-screen-xl w-full flex flex-col gap-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          More intereting news...
        </h2>
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {news.map((item) => {
            return (
              <NewsCard
                _id={item._id}
                imgSrc={item.img}
                text={item.title}
                link={item.link}
                category={item.category}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
