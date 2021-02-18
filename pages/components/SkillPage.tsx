// React
import React, { ReactElement, FC } from 'react';

// Constants
import { SKILLS_HEADER, NODE, REACT, JAVASCRIPT, HTML5, CSS3, GOOGLE_CLOUD, GIT } from '../../constants/general';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SkillPageProps {
  skillRef: React.MutableRefObject<HTMLDivElement>;
}

const SkillPage: FC<SkillPageProps> = ({ skillRef }: SkillPageProps): ReactElement => {
  return (
    <div ref={skillRef} className="py-28">
      <h3 className="text-3xl font-semibold mb-14 -ml-0">{SKILLS_HEADER}</h3>
      <div className="md:flex md:flex-row">
        <div className="flex flex-row align-middle mb-4 md:mr-24">
          <FontAwesomeIcon className="h-8 md:h-12 my-auto w-8 md:w-12" icon={['fab', 'node']} />
          <p className="ml-6 my-auto text-lg">{NODE}</p>
        </div>
        <div className="flex flex-row align-middle mb-4 md:mr-24">
          <FontAwesomeIcon className="h-8 md:h-12 my-auto w-8 md:w-12" icon={['fab', 'react']} />
          <p className="ml-6 my-auto text-lg">{REACT}</p>
        </div>
        <div className="flex flex-row align-middle mb-4 md:mr-24">
          <FontAwesomeIcon className="h-8 md:h-12 my-auto w-8 md:w-12" icon={['fab', 'js-square']} />
          <p className="ml-6 my-auto text-lg">{JAVASCRIPT}</p>
        </div>
      </div>
      <div className="md:flex md:flex-row md:my-10">
        <div className="flex flex-row align-middle mb-4 md:mr-24">
          <FontAwesomeIcon className="h-8 md:h-12 my-auto w-8 md:w-12" icon={['fab', 'html5']} />
          <p className="ml-6 my-auto text-lg">{HTML5}</p>
        </div>
        <div className="flex flex-row align-middle mb-4 md:mr-24">
          <FontAwesomeIcon className="h-8 md:h-12 my-auto w-8 md:w-12" icon={['fab', 'css3-alt']} />
          <p className="ml-6 my-auto text-lg">{CSS3}</p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="md:flex md:flex-row">
        <div className="md:flex md:flex-row md:my-10">
          <div className="flex flex-row align-middle mb-4 md:mr-24">
            <FontAwesomeIcon className="h-8 md:h-12 my-auto w-8 md:w-12" icon={['fab', 'google']} />
            <p className="ml-6 my-auto text-lg">{GOOGLE_CLOUD}</p>
          </div>
          <div className="flex flex-row align-middle mb-4 md:mr-24">
            <FontAwesomeIcon className="h-8 md:h-12 my-auto w-8 md:w-12" icon={['fab', 'git-alt']} />
            <p className="ml-6 my-auto text-lg">{GIT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
