// React
import React, { ReactElement, FC } from 'react';

interface AboutPageProps {
  aboutRef: ref;
}

const AboutPage: FC<AboutPageProps> = ({ aboutRef }: AboutPageProps): ReactElement => {
  return (
    <div ref={aboutRef} className="py-36 lg:py-52">
      <h1 className="text-3xl font-semibold mb-14 -ml-0">What I do?</h1>
      <div className="md:flex md:justify-between">
        <div className="WhatIDo__leftBlock mb-9 md:mb-0">
          <img className="mb-4 md:mb-5 w-7 md:w-9 item-icon" src="./coding.svg" alt="code-logo" />
          <h4 className="mb-3 md:mb-4 font-medium text-xl">Coding @ Work</h4>
          <div className="w-10/12 md:w-full text-sm md:text-base mb-10 md:mr-96 pt-5">
            <p className="mb-6 tracking-widest">
              I am currently working for Blink, I maintain and develop their online platform that contains educational
              and innovative modules for primary and secondary education. Their front-end is written in React while
              their back-end is written in Node.js.
            </p>
            <p className="tracking-widest">
              My job is to maintain and develop both including the Devops which I do through Google Cloud. We do this
              using the newest technologies including but not limited to TypeScript, FC Components, Custom Hooks,
              Tailwind CSS, GitLab & Kubernetes.
            </p>
          </div>
        </div>
        <div className="m-auto md:m-0">
          <img className="mb-4 md:mb-5 w-7 md:w-8 item-icon" src="./free-time.svg" alt="free-time-logo" />
          <h4 className="mb-3 md:mb-4 font-medium text-xl">Free Time</h4>
          <div className="w-10/12 md:w-full text-sm md:text-base mb-6 pt-3">
            <p className="mb-6 tracking-widest">
              In my free time I try to hone my developer skills with various projects which you can see on my
              <a href="https://github.com/MikevPeeren/"> Github </a> and
              <a href="https://gitlab.com/MikevPeeren/"> GitLab</a>. I am mostly interested in the newest technologies
              and techniques, for example I recently have delved into Next.js and Kubernetes. In combination with coding
              these newest technologies and techniques I also do a fair bit of reading through newsletters and blog
              posts so I stay up to date with the industry.
            </p>
            <p className="tracking-widest">
              Further more what I like to do in my free time when not coding is walk in the nature with my beautiful
              wife, child and dachshund called Belle, play video games and make delicious meals on the BBQ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
