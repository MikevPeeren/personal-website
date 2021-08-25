// React
import React, { ReactElement, FC } from 'react';

// Next
import Image from 'next/image';

// Constants
import {
  SKILLS_HEADER,
  REACT,
  NEXTJS,
  JAVASCRIPT,
  TYPESCRIPT,
  HTML5,
  CSS3,
  TAILWIND,
  GIT,
  VERCEL,
} from '../../constants/general';

import REACT_ICON from '../../public/icons/react.svg';
import NEXTJS_ICON from '../../public/icons/nextdotjs.svg';
import JAVASCRIPT_ICON from '../../public/icons/javascript.svg';
import TYPESCRIPT_ICON from '../../public/icons/typescript.svg';
import HTML5_ICON from '../../public/icons/html5.svg';
import CSS3_ICON from '../../public/icons/css3.svg';
import TAILWIND_ICON from '../../public/icons/tailwindcss.svg';
import VERCEL_ICON from '../../public/icons/vercel.svg';
import GIT_ICON from '../../public/icons/git.svg';

interface SkillPageProps {
  skillRef: React.MutableRefObject<HTMLDivElement>;
}

const SkillPage: FC<SkillPageProps> = ({ skillRef }: SkillPageProps): ReactElement => {
  return (
    <div ref={skillRef} className="py-28">
      <h3 className="text-3xl font-semibold mb-14 -ml-0">{SKILLS_HEADER}</h3>
      <div className="md:flex md:flex-row">
        <div className="flex flex-row align-middle mb-4 md:mr-24">
          <Image src={REACT_ICON} alt="react-logo" width={50} height={50} />
          <p className="ml-6 my-auto text-lg">{REACT}</p>
        </div>
        <div className="flex flex-row align-middle mb-4 md:mr-24">
          <Image src={NEXTJS_ICON} alt="nextjs-logo" width={50} height={50} />
          <p className="ml-6 my-auto text-lg">{NEXTJS}</p>
        </div>
        <div className="flex flex-row align-middle mb-4 md:mr-24">
          <Image src={JAVASCRIPT_ICON} alt="javascript-logo" width={50} height={50} />
          <p className="ml-6 my-auto text-lg">{JAVASCRIPT}</p>
        </div>
        <div className="flex flex-row align-middle mb-4 md:mr-24">
          <Image src={TYPESCRIPT_ICON} alt="typescript-logo" width={50} height={50} />
          <p className="ml-6 my-auto text-lg">{TYPESCRIPT}</p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="md:flex md:flex-row">
        <div className="md:flex md:flex-row md:my-10">
          <div className="flex flex-row align-middle mb-4 md:mr-24">
            <Image src={HTML5_ICON} alt="html5-logo" width={50} height={50} />
            <p className="ml-6 my-auto text-lg">{HTML5}</p>
          </div>
          <div className="flex flex-row align-middle mb-4 md:mr-24">
            <Image src={CSS3_ICON} alt="css3-logo" width={50} height={50} />
            <p className="ml-6 my-auto text-lg">{CSS3}</p>
          </div>
          <div className="flex flex-row align-middle mb-4 md:mr-24">
            <Image src={TAILWIND_ICON} alt="tailwind-logo" width={50} height={50} />
            <p className="ml-6 my-auto text-lg">{TAILWIND}</p>
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <div className="md:flex md:flex-row">
        <div className="md:flex md:flex-row md:my-10">
          <div className="flex flex-row align-middle mb-4 md:mr-24">
            <Image src={GIT_ICON} alt="git-logo" width={50} height={50} />
            <p className="ml-6 mr-10 my-auto text-lg">{GIT}</p>
          </div>
          <div className="flex flex-row align-middle mb-4 md:mr-24">
            <Image src={VERCEL_ICON} alt="vercel-logo" width={50} height={50} />
            <p className="ml-6 my-auto text-lg">{VERCEL}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
