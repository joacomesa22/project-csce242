import React from "react";
import Button from "../../components/Button";

const Store = () => {
  return (
    <section className="flex flex-wrap md:flex-nowrap justify-center items-center md:p-24 md:gap-16 p-16 gap-4">
      <div className="w-full lg:max-w-[600px]">
        <img
          src="img/store.jpg"
          alt="Messi Store"
          className="rounded-md border-2 border-[var(--gold)]"
        />
      </div>
      <div className="flex flex-col gap-4 md:items-start text-center md:text-start">
        <h2 className="text-3xl md:text-4xl font-bold">The Messi Store</h2>
        <p className="max-w-[600px]">
          Visit the official store of the Argentinian superstar, where you'll
          discover a wide variety of clothing and accessories, allowing you to
          dress like the best in the world. From casual wear to sports gear,
          find everything you need to embody the style of a true champion.
        </p>
        <Button link={"https://www.themessistore.com/"} text={"Visit"} />
      </div>
    </section>
  );
};

export default Store;
