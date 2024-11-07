import React from "react";

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "d20c1ebe-a85e-4ed3-94ea-1b1826cb2bd4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <form
      class=" w-full max-w-[400px]"
      method="POST"
      id="contact-form"
      onSubmit={onSubmit}
    >
      <div class="mb-2 flex flex-col">
        <label for="name">Full Name </label>
        <input
          type="text"
          class="bg-white focus:border-2 focus:border-[var(--gold)] border-2 border-[var(--light)] resize-none text-black p-2 rounded-md"
          id="name"
          name="name"
          required
        />
      </div>
      <div class="mb-2 flex flex-col">
        <label for="email">Email </label>
        <input
          type="email"
          class="bg-white focus:border-2 focus:border-[var(--gold)] border-2 border-[var(--light)] resize-none text-black p-2 rounded-md"
          id="email"
          name="email"
          required
        />
      </div>
      <div class="mb-6 flex flex-col">
        <label for="message">Message</label>
        <textarea
          class="bg-white focus:border-2 focus:border-[var(--gold)] border-2 border-[var(--light)] resize-none text-black p-2 rounded-md"
          id="message"
          rows="3"
          name="message"
          required
        ></textarea>
      </div>
      <div class="flex items-center gap-4">
        <button
          type="submit"
          id="submitBtn"
          class="bg-[#E8B34B] font-bold hover:text-[#E8B34B] hover:bg-black text-black px-4 py-1 border-2 border-[#E8B34B] hover:border-[#E8B34B] transition-all duration-300 rounded"
        >
          Send
        </button>
        <p>{result}</p>
      </div>
    </form>
  );
};

export default ContactForm;
