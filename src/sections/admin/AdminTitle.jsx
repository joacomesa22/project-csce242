import React from "react";
import Button from "../../components/Button";

const AdminTitle = () => {
  return (
    <section class="flex justify-center gap-8 pt-16 pb-8 px-4">
      <div class="max-w-screen-xl w-full flex flex-col gap-4">
        <div class="flex items-center justify-start flex-wrap gap-4">
          <h1 class="text-4xl font-bold md:text-6xl">Admin Panel</h1>
          <Button text="Exit Admin" link="/" />
        </div>
        <p>
          Welcome! Here you can manage all of the data for the Meet&Greet
          giveaway
        </p>
      </div>
    </section>
  );
};

export default AdminTitle;
