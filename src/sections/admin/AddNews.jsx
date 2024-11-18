import React from "react";
import AddNewsForm from "../../components/AddNewsForm";

const AddNews = () => {
  return (
    <section className="flex justify-center px-4 py-16">
      <div className="relative overflow-x-auto max-w-screen-xl w-full">
        <h2 className="text-2xl font-bold pb-4">Add News:</h2>
        <AddNewsForm client:load />
      </div>
    </section>
  );
};

export default AddNews;
