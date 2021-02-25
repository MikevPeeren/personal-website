// Next
import Image from 'next/image';

// React
import React, { ReactElement, FC } from 'react';

// Constants
import { ABOUT_HEADER, GITHUB, GITLAB, BLINK } from '../../constants/general';
import {
  CODING_AT_WORK_HEADER,
  CODING_AT_WORK_TEXT_PART_ONE,
  CODING_AT_WORK_TEXT_PART_TWO,
  CODING_AT_HOME_HEADER,
  CODING_AT_HOME_TEXT_PART_ONE,
  CODING_AT_HOME_TEXT_PART_TWO,
  CODING_AT_HOME_TEXT_PART_THREE,
  BELLE_HEADER,
  BELLE_TEXT,
  HOBBIES_HEADER,
  HOBBIES_TEXT,
} from '../../constants/about';

interface AboutPageProps {
  aboutRef: React.MutableRefObject<HTMLDivElement>;
}

const AboutPage: FC<AboutPageProps> = ({ aboutRef }: AboutPageProps): ReactElement => {
  return (
    <div ref={aboutRef} className="py-36 lg:pt-52">
      <h3 className="text-3xl font-semibold mb-14 -ml-0">{ABOUT_HEADER}</h3>
      <div className="md:flex md:flex-col md:justify-between">
        <div className="md:flex md:flex-row md:justify-between">
          <div className="md:w-5/12 md:mb-0">
            <div className="mb-4 md:mb-5 w-7 md:w-8">
              <Image className="z-0" src="/coding-work.svg" alt="coding-at-work-logo" width={50} height={50} />
            </div>
            <h4 className="mb-3 md:mb-4 font-medium text-xl">{CODING_AT_WORK_HEADER}</h4>
            <div className="w-10/12 md:w-full text-sm md:text-base mb-10 pt-5">
              <p className="mb-6 tracking-widest h-1/2">
                {CODING_AT_WORK_TEXT_PART_ONE}
                <a href="https://blink.nl" className="text-blue-600">
                  {BLINK}
                </a>
                {CODING_AT_WORK_TEXT_PART_TWO}
              </p>
            </div>
          </div>
          <div className="md:w-5/12 md:m-0">
            <div className="mb-4 md:mb-5 w-7 md:w-8">
              <Image className="z-0" src="/coding-home.svg" alt="coding-at-home-logo" width={50} height={50} />
            </div>
            <h4 className="mb-3 md:mb-4 font-medium text-xl">{CODING_AT_HOME_HEADER}</h4>
            <div className="w-10/12 md:w-full text-sm md:text-base mb-10 pt-5">
              <p className="mb-6 tracking-widest h-1/2">
                {CODING_AT_HOME_TEXT_PART_ONE}
                <a href="https://github.com/MikevPeeren/" className="text-blue-600">
                  {GITHUB}
                </a>
                {CODING_AT_HOME_TEXT_PART_TWO}
                <a href="https://gitlab.com/MikevPeeren/" className="text-blue-600">
                  {GITLAB}
                </a>
                {CODING_AT_HOME_TEXT_PART_THREE}
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row md:justify-between">
          <div className="md:w-5/12 md:mb-0">
            <div className="mb-4 md:mb-5 w-7 md:w-8">
              <Image className="z-0" src="/dachshund.svg" alt="dachshund-logo" width={50} height={50} />
            </div>
            <h4 className="mb-3 md:mb-4 font-medium text-xl">{BELLE_HEADER}</h4>
            <div className="w-10/12 md:w-full text-sm md:text-base mb-10 pt-5 h-3/4">
              <div className="w-7/12 md:w-5/12 rounded-xl float-left mr-3 mb-1 md:mr-6">
                <Image className="rounded-xl z-0" src="/belle-snow.jpg" alt="dog-in-snow" width={300} height={400} />
              </div>
              <p className="mb-6 tracking-widest h-3/4">{BELLE_TEXT}</p>
            </div>
          </div>
          <div className="md:w-5/12 md:m-0">
            <div className="mb-4 md:mb-5 w-7 md:w-8">
              <Image className="z-0" src="/joystick.svg" alt="gaming-logo" width={50} height={50} />
            </div>
            <h4 className="mb-3 md:mb-4 font-medium text-xl">{HOBBIES_HEADER}</h4>
            <div className="w-10/12 md:w-full text-sm md:text-base mb-10 pt-4 h-3/4">
              <p className="mb-6 tracking-widest h-3/4">{HOBBIES_TEXT}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
