import { useState } from "react";

const AddNewsForm = () => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleImageChange = (e) => {
    const key = e.target.name;
    const value = e.target.files[0];
    setInputs((prev) => ({
      ...prev,
      [key]: value,
    }));
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
    setResult("Submitting...");

    const formData = new FormData();

    for (const key in inputs) {
      if (Array.isArray(inputs[key])) {
        inputs[key].forEach((item) => formData.append(key, item));
      } else {
        formData.append(key, inputs[key]);
      }
    }

    try {
      const response = await fetch(
        "https://server-helloworld-7ybx.onrender.com/api/news",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setResult("News successfully added");
      } else {
        setResult("Error adding news");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error adding news");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[600px]">
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
            required
            onChange={handleImageChange}
          />
        </div>
        <p>Image Preview:</p>
        <img
          id="img-prev"
          alt=""
          src={inputs.img != null ? URL.createObjectURL(inputs.img) : ""}
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
        className="bg-[var(--gold)] hover:bg-black border-2 border-[var(--gold)] duration-300 text-black hover:text-white cursor-pointer w-max p-2 px-4"
      />
      <p id="result">{result}</p>
    </form>
  );
};

export default AddNewsForm;
