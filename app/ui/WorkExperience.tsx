const WorkExperience = () => {
  return (
    <div>
      <h2>Work Experience</h2>

      <div className="flex flex-col gap-12">
        <div className="flex flex-row justify-between gap-10">
          <h3 className="text-50 top-[135px] sticky flex-start h-min text-xl">
            2024 Aug — <span className="block">Present</span>
          </h3>
          <div className="flex-col flex gap-2">
            <div>
              <h3 className="text-2xl">XXL Nutrition</h3>
              <span className="text-50 font-bold">Tech Lead</span>
            </div>

            <ul className="max-w-lg font-medium">
              <li>
                Building and developing a strong in-house team to replace the
                need for an external agency.
              </li>
              <li>
                Working as the Tech Lead, staying hands-on with feature
                implementation and guiding the team’s technical growth.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-10">
          <h3 className="text-50 top-[135px] sticky flex-start h-min text-xl">
            2023 Jan — <span className="block">2024 Aug</span>
          </h3>
          <div className="flex-col flex gap-2">
            <div>
              <h3 className="text-2xl">YoungOnes</h3>
              <span className="text-50 font-bold">Lead Frontend Developer</span>
            </div>

            <ul className="max-w-lg font-medium">
              <li>
                Shaped the frontend vision and led its development as a Frontend
                Development Lead.
              </li>
              <li>
                Led a team providing mentorship to deliver high-quality scalable
                user experiences.
              </li>
              <li>
                Managed day-to-day operations, fostering collaboration and
                innovation within the team.
              </li>
              <li>
                Optimized workflows and enforced coding standards to enhance
                team proficiency and success.{" "}
              </li>
              <li>
                Stayed up-to-date with emerging technologies to ensure best
                practices.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-10">
          <h3 className="text-50 top-[135px] sticky flex-start h-min text-xl">
            2021 Oct — <span className="block">2023 Jan</span>
          </h3>
          <div className="flex-col flex gap-2">
            <div>
              <h3 className="text-2xl">YoungOnes</h3>
              <span className="text-50 font-bold">Frontend Developer</span>
            </div>
            <ul className="max-w-lg font-medium">
              <li>
                Revamped a React app using Next.js to enhance performance and
                user experience.
              </li>
              <li>
                Demonstrated expertise in optimizing applications for speed,
                scalability, and adherence to industry standards.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-10">
          <h3 className="text-50 top-[135px] sticky flex-start h-min text-xl">
            2019 Oct - <span className="block">2021 Oct</span>
          </h3>
          <div className="flex-col flex gap-2">
            <div>
              <h3 className="text-2xl">Blink</h3>
              <span className="text-50 font-bold">Full Stack Developer</span>
            </div>
            <ul className="max-w-lg font-medium">
              <li>
                Enhanced the Duuk platform for primary and secondary education
                as a Full Stack Developer at Blink.
              </li>
              <li>
                Worked on modules like Blink Engels and Blink Lezen using the
                MERN Stack (MongoDB, Express, React.js, Node.js).
              </li>
              <li>
                Engaged in both frontend (React) and backend (Node.js)
                development.
              </li>
              <li>
                Implemented functionalities for teachers and students, including
                digiboard lessons and exercise planning.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-10">
          <h3 className="text-50 top-[135px] sticky flex-start h-min text-xl">
            2017 Sept - <span className="block">2019 Oct</span>
          </h3>
          <div className="flex-col flex gap-2">
            <div>
              <h3 className="text-2xl">PIDZ</h3>
              <span className="text-50 font-bold">Backend Developer</span>
            </div>
            <ul className="max-w-lg font-medium">
              <li>
                Contributed to the development of matching and planning software
                for the healthcare industry as a Symfony PHP Backend Developer
                at PIDZ.
              </li>
              <li>
                Specialized in PHP development within the Symfony Framework for
                a Monolithic application.
              </li>
              <li>
                Actively participated in the transition from a Monolithic
                application to a microservices architecture.
              </li>
              <li>
                Managed and maintained the mobile app and its associated API,
                implementing key improvements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
