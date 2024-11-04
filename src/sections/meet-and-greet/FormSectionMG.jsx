import React from "react";
import FormMG from "./FormMG";

const FormSectionMG = () => {
  return (
    <section class="flex justify-center items-center gap-8 p-16 flex-wrap">
      <div class="max-w-[500px]">
        <img
          src="/img/formImg.jpg"
          alt="#"
          class="w-full border-2 border-[var(--gold)] rounded-3xl"
        />
      </div>
      <FormMG />
    </section>
  );
};

export default FormSectionMG;
