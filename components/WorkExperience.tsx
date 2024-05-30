const WorkExperience = () => {
  return (
    <div className="py-10">
      <h2 className="py-10">Work Experience</h2>

      <div className="flex flex-col gap-12">
        <div className="flex flex-row justify-between gap-10">
          <h3 className="text-50 top-[115px] sticky flex-start h-min text-2xl">
            2023 Jan — Present
          </h3>
          <div className="flex-col flex gap-2">
            <div>
              <h3 className="text-2xl">YoungOnes</h3>
              <span className="text-50">Frontend Development Lead</span>
            </div>
            <p className="max-w-lg font-bold">
              As Frontend Development Lead, I shape frontend vision and oversee
              its development. I lead a team, providing mentorship for
              high-quality, scalable user experiences. I ensure day-to-day
              operations, fostering collaboration and innovation. I optimize
              workflows and enforce coding standards to elevate team proficiency
              and success while staying current with emerging technologies
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-10">
          <h3 className="text-50 top-[115px] sticky flex-start h-min text-2xl">
            2021 Oct — 2023 Jan
          </h3>
          <div className="flex-col flex gap-2">
            <div>
              <h3 className="text-2xl">YoungOnes</h3>
              <span className="text-50">Frontend Developer</span>
            </div>
            <p className="max-w-lg font-bold">
              Revamped React app using Next.js for enhanced performance and user
              experience. Demonstrated expertise in optimising applications for
              speed, scalability, and adherence to industry standards.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-10">
          <h3 className="text-50 top-[115px] sticky flex-start h-min text-2xl">
            2019 Oct - 2021 Oct
          </h3>
          <div className="flex-col flex gap-2">
            <div>
              <h3 className="text-2xl">Blink</h3>
              <span className="text-50">Full Stack Developer</span>
            </div>
            <p className="max-w-lg font-bold">
              As a Full Stack Developer at Blink, I contributed to enhancing the
              Duuk platform for primary and secondary education. I worked on
              modules like Blink Engels and Blink Lezen using the MERN Stack
              (MongoDB, Express, React.js, Node.js). My role covered both
              frontend (React) and backend (Node.js), with exposure to Google
              Cloud Platform. I also implemented various functionalities for
              teachers and students, including digiboard lessons and exercise
              planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
