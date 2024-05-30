"use client";

import Avatar from "./Avatar";

import Boyd from "@/public/testimonials/boyd.jpeg";
import Henro from "@/public/testimonials/henro.jpeg";
import Manon from "@/public/testimonials/manon.jpeg";
import Rano from "@/public/testimonials/rano.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      src: Manon,
      name: "Manon van Keulen",
      role: "Frontend Developer",
      alt: "Profile picture of Manon",
      text: "I got to know Mike as a driven Lead Frontend Developer. It is a pleasure to work with him. He has an eye for what it takes to grow his team, both as a whole and individually, with understanding for the person behind the developer. Mike has expertise in his field, but also offers room for his own input to jointly develop a great product. I have already learned a lot from him in the field of Frontend Development and I am very grateful to him for that. He is a valuable asset to any project or team!",
    },
    {
      src: Boyd,
      name: "Boyd Boom",
      role: "Recruitment Specialist",
      alt: "Profile picture of Boyd",
      text: "The combination of the right technical skills and his personal approach makes Mike a very good lead developer. Mike knows where he wants to go with his team and clearly explains what he needs. This ensured that the recruitment for the frontend team went smoothly and with the desired results. For a lead developer who can take an environment to the next level, Mike is the right place for you!",
    },
    {
      src: Rano,
      name: "Rano Hardjosemito",
      role: "FullStack Developer",
      alt: "Profile picture of Rano",
      text: "Mike is a great addition to any team. His problem solving and critical thinking have been of great value to the project(s) we have worked on together. Moreover, his implementations and code formatting will leave a lasting mark in a good way.",
    },
    {
      src: Henro,
      name: "Henro Veijer",
      role: "Data Specialist",
      alt: "Profile picture of Henro",
      text: "Mike is a cheerful guy who, despite all his light-heartedness, is serious about his work. As a BI Analyst I regularly needed his knowledge of the systems and he was always able to help me. Mike always seems to be seeking knowledge: Why are you doing this this way? What's the benefit? In this way he tries to learn and understand more and more. In addition, a pleasant guy to work with.",
    },
  ];

  // transparent 0%, black 10%, black 90%, transparent 100%)
  return (
    <div className="py-10">
      <h2 className="py-10">Testimonials</h2>
      <div className="flex flex-col h-[400px] w-full flex-nowrap overflow-hidden [mask-image:linear-gradient(to_top,transparent_0,_black_200px,_black_calc(100%-400px),transparent_100%)] group items-start">
        <div className="testimonial-wrapper">
          {testimonials.map((testimonial, index) => (
            <div
              className="max-w-none flex flex-col gap-2 my-6 bg-[#262626]/10 dark:bg-[#262626] p-10 rounded-2xl border border-[#262626]/[.3] dark:border-[#FFFFFF]/[.16]"
              key={testimonial.name}
            >
              <div className="flex flex-row gap-6 items-center">
                <Avatar src={testimonial.src} />
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <p className="font-bold text-50">{testimonial.text}</p>
            </div>
          ))}
        </div>
        <div className="testimonial-wrapper" aria-hidden="true">
          {testimonials.map((testimonial, index) => (
            <div
              className="max-w-none flex flex-col gap-2 my-6 bg-[#262626]/10 dark:bg-[#262626] p-10 rounded-2xl border border-[#262626]/[.3] dark:border-[#FFFFFF]/[.16]"
              key={testimonial.name}
            >
              <div className="flex flex-row gap-6 items-center">
                <Avatar src={testimonial.src} />
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <p className="font-bold text-50">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
