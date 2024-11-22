import React from "react";
import AddNewsForm from "../../components/AddNewsForm";

const AddNews = (props) => {
  return (
    <section className="flex justify-center px-4 py-16 max-w-[800px] w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 border-2 border-[var(--gold)] bg-black">
      <button
        onClick={props.closeDialog}
        className="p-2 border-2 absolute top-0 right-0"
      >
        X
      </button>
      <div className="relative overflow-x-auto max-w-screen-xl w-full">
        <h2 className="text-2xl font-bold pb-4">Add News:</h2>
        <AddNewsForm
          client:load
          updateArticles={props.updateArticles}
          closeDialog={props.closeDialog}
        />
      </div>
    </section>
  );
};

export default AddNews;
