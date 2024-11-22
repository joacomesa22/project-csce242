import React, { useState } from "react";
import DeleteArticleDialog from "./DeleteArticleDialog";
import EditArticleDialog from "./EditArticleDialog";

const AdminTableRow = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [article, setArticle] = useState(props);
  const [showArticle, setShowArticle] = useState(true);

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const hideArticle = () => {
    setShowArticle(false);
  };

  const editArticle = (newArticle) => {
    setArticle(newArticle);
  };

  return (
    <>
      {showArticle ? (
        <tr className="bg-[#2c2c2c]  border-b ">
          <td>
            {showDeleteDialog ? (
              <DeleteArticleDialog
                closeDialog={closeDeleteDialog}
                title={article.title}
                _id={article._id}
                hideArticle={hideArticle}
              />
            ) : (
              ""
            )}
            {showEditDialog ? (
              <EditArticleDialog
                closeDialog={closeEditDialog}
                updateArticle={editArticle}
                _id={article._id}
                title={article.title}
                link={article.link}
                img={article.img}
                category={article.category}
              />
            ) : (
              ""
            )}
          </td>
          <td
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {article.title}
          </td>
          <td className="px-6 py-4">{article.img}</td>
          <td className="px-6 py-4">{article.link}</td>
          <td className="px-6 py-4">
            <ul>
              {Array.isArray(article.category)
                ? article.category.map((cat, i) => <li key={i}>{cat} </li>)
                : article.category}
            </ul>
          </td>
          <td className="flex items-center px-6 py-4">
            <button
              onClick={openEditDialog}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={openDeleteDialog}
              className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
            >
              Delete
            </button>
          </td>
        </tr>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminTableRow;
