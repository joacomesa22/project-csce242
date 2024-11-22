import React, { useState } from "react";

const DeleteArticleDialog = (props) => {
  const [result, setResult] = useState("");

  const deleteArticle = async () => {
    const response = await fetch(
      `http://localhost:3002/api/news/${props._id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 200) {
      setResult(`${props.title} successfully deleted`);
      props.hideArticle();
      props.closeDialog();
    } else {
      setResult("Error deleting article");
    }
  };

  return (
    <div className="px-4 py-16 max-w-[800px] w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 border-2 border-[var(--gold)] bg-black">
      <div>
        <button
          className="border-2 absolute top-0 right-0"
          onClick={props.closeDialog}
        >
          &times;
        </button>
        <div id="delete-content">
          <h3 className="pb-8">
            Are you sure you want to delete the article "{props.title}"
          </h3>
          <div className="flex items-center gap-4">
            <button onClick={props.closeDialog} className="p-2 border-2">
              No
            </button>
            <button onClick={deleteArticle} className="p-2 border-2">
              Yes
            </button>
          </div>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default DeleteArticleDialog;
