// React
import React, { ReactElement, FC } from 'react';

interface AboutPageProps {
  aboutRef: React.MutableRefObject<HTMLDivElement>;
}

const AboutPage: FC<AboutPageProps> = ({ aboutRef }: AboutPageProps): ReactElement => {
  return (
    <div ref={aboutRef} className="py-36 lg:py-52">
      <h3 className="text-3xl font-semibold mb-14 -ml-0">About me</h3>
      <div className="md:flex md:flex-col md:justify-between">
        <div className="md:flex md:flex-row md:justify-between">
          <div className="md:w-5/12 md:mb-0">
            <img className="mb-4 md:mb-5 w-7 md:w-8" src="./coding-work.svg" alt="coding-at-work-logo" />
            <h4 className="mb-3 md:mb-4 font-medium text-xl">Coding @ Work</h4>
            <div className="w-10/12 md:w-full text-sm md:text-base mb-10 pt-5">
              <p className="mb-6 tracking-widest h-1/2">
                I am currently working for{' '}
                <a href="https://blink.nl" className="text-blue-600">
                  Blink
                </a>
                , I maintain and develop their online platform that contains educational and innovative modules for
                primary and secondary education. Their front-end is written in React while their back-end is written in
                Node.js. My job is to maintain and develop both including the Devops which I do through Google Cloud. We
                do this using the newest technologies including but not limited to TypeScript, FC Components, Custom
                Hooks, Tailwind CSS, GitLab & Kubernetes.
              </p>
            </div>
          </div>
          <div className="md:w-5/12 md:m-0">
            <img className="mb-4 md:mb-5 w-7 md:w-8" src="./coding-home.svg" alt="coding-at-home-logo" />
            <h4 className="mb-3 md:mb-4 font-medium text-xl">Coding @ Home</h4>
            <div className="w-10/12 md:w-full text-sm md:text-base mb-10 pt-5">
              <p className="mb-6 tracking-widest h-1/2">
                In my free time I try to hone my developer skills with various projects which you can see on my
                <a href="https://github.com/MikevPeeren/" className="text-blue-600">
                  {' '}
                  Github{' '}
                </a>{' '}
                and
                <a href="https://gitlab.com/MikevPeeren/" className="text-blue-600">
                  {' '}
                  GitLab
                </a>
                . I am mostly interested in the newest technologies and techniques, for example I recently have delved
                into Next.js and Kubernetes. In combination with coding these newest technologies and techniques I also
                do a fair bit of reading through newsletters and blog posts so I stay up to date with the industry.
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row md:justify-between">
          <div className="md:w-5/12 md:mb-0">
            <img className="mb-4 md:mb-5 w-7 md:w-8" src="./dachshund.svg" alt="dachshund-logo" />
            <h4 className="mb-3 md:mb-4 font-medium text-xl">Belle</h4>
            <div className="w-10/12 md:w-full text-sm md:text-base mb-10 pt-5">
              <img
                className="w-7/12 md:w-5/12 rounded-xl float-left mr-3 mb-1 md:mr-6"
                src="./belle-snow.jpg"
                alt="dog-in-snow"
              />
              <p className="mb-6 tracking-widest h-1/2">
                My dachshund called Belle is my wife and my joy. We enjoy taking her on long walks near the beach or we
                venture into the nature in the neighborhood. We also take her on our vacations occasionally as the
                picture displays her in Austria, as she enjoys running in the snow allot. We have also taken her to a
                specific Hotel in Austria specifically made for dachshunds where she has made new dachshund friends.
              </p>
            </div>
          </div>
          {/* <div className="md:w-5/12 md:m-0">
            <img className="mb-4 md:mb-5 w-7 md:w-8" src="./free-time.svg" alt="free-time-logo" />
            <h4 className="mb-3 md:mb-4 font-medium text-xl">Hobbies</h4>
            <div className="w-10/12 md:w-full text-sm md:text-base mb-10 pt-5">
              <p className="mb-6 tracking-widest">to be implemented</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
