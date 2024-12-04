import React, { useState } from "react";
import AddNewsForm from "./AddNewsForm";

const EditArticleDialog = (props) => {
  const [inputs, setInputs] = useState({
    title: props.title,
    link: props.link,
    img: props.img,
    category: props.category,
  });

  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    setInputs((prev) => {
      const updatedCategories = checked
        ? [...(prev.category || []), value]
        : (prev.category || []).filter((category) => category !== value);

      return {
        ...prev,
        category: updatedCategories,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);

    for (const key in inputs) {
      if (Array.isArray(inputs[key])) {
        inputs[key].forEach((item) => formData.append(key, item));
      }
    }

    const response = await fetch(
      `https://server-helloworld-7ybx.onrender.com/api/news/${props._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (response.status === 200) {
      setResult("Article successfully updated");
      e.target.reset();
      props.updateArticle(await response.json());
      props.closeDialog();
    } else {
      setResult("Error updating article. Please try again.");
    }
  };

  return (
    <section className="flex justify-center p-16 max-w-[800px] rounded-xl w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 border-2 border-[var(--gold)] bg-black">
      <button
        onClick={props.closeDialog}
        className="p-2 absolute top-6 right-8 text-2xl"
      >
        <img src="/img/x-solid.svg" alt="x icon" className="size-6" />
      </button>
      <div className="relative overflow-x-auto max-w-screen-xl w-full">
        <h2 className="text-2xl font-bold pb-4">Edit News:</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-[600px]"
        >
          <div className="flex flex-col">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="text-black"
              onChange={handleChange}
              value={inputs.title || ""}
            />
          </div>

          <div>
            <div className="flex flex-col">
              <label htmlFor="img">Image URL:</label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <p>Image Preview:</p>
            <img
              id="img-prev"
              className="max-w-[100px]"
              alt="Previews"
              src={
                inputs.img instanceof File
                  ? URL.createObjectURL(inputs.img)
                  : inputs.img
                  ? `https://server-helloworld-7ybx.onrender.com/images/${inputs.img}`
                  : ""
              }
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="link">Link:</label>
            <input
              type="text"
              id="link"
              name="link"
              required
              className="text-black"
              onChange={handleChange}
              value={inputs.link || ""}
            />
          </div>
          <div>
            Categories:
            <div>
              {[
                "Stories",
                "Football",
                "Barcelona",
                "Argentina",
                "Fun Facts",
                "Lifestyle",
                "MLS",
              ].map((category) => (
                <div key={category} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={category}
                    value={category}
                    onChange={handleCategoryChange}
                    checked={(inputs.category || []).includes(category)}
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
            </div>
          </div>

          <input
            type="submit"
            value="Submit"
            className="bg-[var(--gold)] font-bold hover:text-[var(--gold)] hover:bg-black text-black p-3 border-2 border-[var(--gold)] hover:border-[var(--gold)] transition-all duration-300 rounded cursor-pointer"
          />
          <p id="result">{result}</p>
        </form>
      </div>
    </section>
  );
};

export default EditArticleDialog;
