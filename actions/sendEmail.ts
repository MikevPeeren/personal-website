export async function sendEmail(_prevState: unknown, formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const response = await fetch(
    `https://formspree.io/f/${process.env["NEXT_PUBLIC_FORMSPREE_FORM_ID"]}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(rawFormData),
    },
  );

  return {
    returnMessage: response.ok
      ? "I have received your message, Thanks!"
      : "Something went wrong, please try again.",
  };
}
