"use client";

import { useState } from "react";
import Button from "./Button";
import { sendEmail } from "@/actions/sendEmail";
import { useFormState } from "react-dom";

const initialState = {
  name: "",
  email: "",
  message: "",
  returnMessage: "",
};

const ContactForm = () => {
  const [state, formAction] = useFormState(sendEmail, initialState);

  return state?.returnMessage ? (
    <p className="text-50 text-lg font-bold">{state?.returnMessage}</p>
  ) : (
    <form className="flex gap-6 flex-col w-full" action={formAction}>
      <input
        type="text"
        id="name"
        name="name"
        className="block w-full p-4 placeholder:text-50 rounded-2xl border border-[#000000]/10 dark:border-[#FFFFFF]/10 bg-[#F5F5F5] dark:bg-[#262626] focus:outline-none"
        placeholder="Name"
      />
      <input
        type="text"
        id="email"
        name="email"
        className="block w-full p-4 placeholder:text-50 rounded-2xl border border-[#000000]/10 dark:border-[#FFFFFF]/10 bg-[#F5F5F5] dark:bg-[#262626] focus:outline-none"
        placeholder="Email"
      />
      <textarea
        id="message"
        name="message"
        rows={10}
        className="block w-full p-4 placeholder:text-50 rounded-2xl border border-[#000000]/10 dark:border-[#FFFFFF]/10 bg-[#F5F5F5] dark:bg-[#262626] focus:outline-none"
        placeholder="Message"
      />
      <Button variant="secondary" size="lg" type="submit" buttonText="Submit" />
    </form>
  );
};

export default ContactForm;
