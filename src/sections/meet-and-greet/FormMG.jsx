import React from "react";

const FormMG = () => {
  return (
    <form class="flex flex-col items-start gap-4" id="form">
      <label for="name" class="flex flex-col gap-2">
        <span class="text-md font-bold">Full Name</span>
        <input
          type="text"
          name="name"
          id="name"
          required
          class="rounded-lg text-[var(--dark)] focus:border-2 focus:border-[var(--gold)] border-2 border-[var(--light)]"
        />
      </label>
      <label for="email" class="flex flex-col gap-2">
        <span class="text-md font-bold">Email</span>
        <input
          type="email"
          name="email"
          id="email"
          required
          class="rounded-lg text-[var(--dark)] focus:border-2 focus:border-[var(--gold)] border-2 border-[var(--light)]"
        />
      </label>
      <label for="country" class="flex flex-col gap-2">
        <span class="text-md font-bold">Country</span>
        <input
          type="text"
          name="country"
          id="country"
          required
          class="rounded-lg text-[var(--dark)] focus:border-2 focus:border-[var(--gold)] border-2 border-[var(--light)]"
        />
      </label>

      <div class="flex flex-col">
        <span class="mb-2 text-md font-bold">Gender</span>
        <div class="flex items-start gap-4">
          <label>
            <input
              type="radio"
              name="gender"
              value="f"
              class="text-[var(--gold)]"
            />
            <span>Female</span>
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="m"
              class="text-[var(--gold)]"
            />
            <span>Male</span>
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="o"
              class="text-[var(--gold)]"
            />
            <span>Other</span>
          </label>
        </div>
      </div>

      <input
        type="submit"
        value="Submit"
        class="bg-[var(--gold)] font-bold hover:text-[var(--gold)] hover:bg-black text-black px-4 py-1 border-2 border-[var(--gold)] hover:border-[var(--gold)] transition-all duration-300 rounded cursor-pointer"
      />
    </form>
  );
};

export default FormMG;
