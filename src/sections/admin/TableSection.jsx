import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import AddNews from "./AddNews";
import AdminTableRow from "../../components/AdminTableRow";

const TableSection = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const res = await fetch("http://localhost:3002/api/news");
      const data = await res.json();
      setNews(data);
    };
    getNews();
  }, []);

  const updateArticles = (article) => {
    setNews((prev) => [...prev, article]);
  };

  const closeAddDialog = () => {
    setShowAddDialog(false);
  };

  return (
    <section className="flex flex-col justify-center items-center px-4">
      {showAddDialog ? (
        <AddNews
          client:load
          closeDialog={closeAddDialog}
          updateArticles={updateArticles}
        />
      ) : (
        ""
      )}
      <button
        onClick={() => {
          setShowAddDialog(!showAddDialog);
        }}
        className="border-2 p-4"
      >
        Add Article
      </button>
      <div className="relative overflow-x-auto max-w-screen-xl w-full">
        <table className="w-full text-sm text-left rtl:text-right text-[var(--light)] ">
          <thead className="text-xs text-[var(--gold)] uppercase bg-[var(--dark)] border-2 border-[var(--gold)]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
              <th scope="col" className="px-6 py-3">
                Categories
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {news?.map((article, i) => {
              return (
                <AdminTableRow
                  key={i}
                  _id={article._id}
                  title={article.title}
                  link={article.link}
                  img={article.img}
                  category={article.category}
                  client:load
                  updateArticles={updateArticles}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableSection;
