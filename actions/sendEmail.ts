"use server";

export async function sendEmail(_prevState: any, formData: FormData) {
  console.log(formData);

  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const response = await fetch(process.env.FORM_SPARK_ACTION_URL ?? "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  });

  return {
    returnMessage: response.ok
      ? "I have received your message, Thanks!"
      : "Something went wrong, please try again.",
  };
}
