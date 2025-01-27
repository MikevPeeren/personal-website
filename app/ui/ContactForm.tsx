"use client";

import { useActionState } from "react";

import Button from "./Button";

import { sendEmail } from "@/actions/sendEmail";

const initialState = {
  name: "",
  email: "",
  message: "",
  returnMessage: "",
};

const ContactForm = () => {
  const [state, formAction] = useActionState(sendEmail, initialState);

  return (
    <form className="flex gap-6 flex-col w-full" action={formAction}>
      {state.returnMessage && (
        <p className="text-50 text-lg font-bold">{state?.returnMessage}</p>
      )}
      <input
        type="text"
        id="name"
        name="name"
        className="disabled:cursor-not-allowed block w-full p-4 text-50 rounded-2xl border border-[#000000]/10 dark:border-[#FFFFFF]/10 bg-[#F5F5F5] dark:bg-[#262626] focus:outline-hidden"
        placeholder="Name"
        disabled={!!state?.returnMessage}
      />
      <input
        type="text"
        id="email"
        name="email"
        className="disabled:cursor-not-allowed block w-full p-4 text-50 rounded-2xl border border-[#000000]/10 dark:border-[#FFFFFF]/10 bg-[#F5F5F5] dark:bg-[#262626] focus:outline-hidden"
        placeholder="Email"
        disabled={!!state?.returnMessage}
      />
      <textarea
        id="message"
        name="message"
        rows={10}
        className="disabled:cursor-not-allowed block w-full p-4 text-50 rounded-2xl border border-[#000000]/10 dark:border-[#FFFFFF]/10 bg-[#F5F5F5] dark:bg-[#262626] focus:outline-hidden"
        placeholder="Message"
        disabled={!!state?.returnMessage}
      />
      <Button variant="secondary" size="lg" type="submit" buttonText="Submit" />
    </form>
  );
};

export default ContactForm;
