// React
import React, { FC, ReactElement } from "react";

import {
  JOB_ONE_TEXT,
  JOB_ONE_TITLE,
  JOB_THREE_TEXT,
  JOB_THREE_TITLE,
  JOB_TWO_TEXT,
  JOB_TWO_TITLE,
} from "../../../utils/constants/experience";
// Constants
import { EXPERIENCE_HEADER } from "../../../utils/constants/general";

interface ExperienceProps {
  experienceRef: React.RefObject<HTMLDivElement>;
}
const ExperienceSection: FC<ExperienceProps> = ({
  experienceRef,
}: ExperienceProps): ReactElement => {
  return (
    <div ref={experienceRef} className="py-28">
      <h3 className="text-3xl font-semibold mb-14 -ml-0">
        {EXPERIENCE_HEADER}
      </h3>
      <div className="md:flex md:flex-col">
        <div>
          <h4 className="font-medium text-xl">{JOB_ONE_TITLE}</h4>
          <p className="mb-6 h-1/2 pt-5">{JOB_ONE_TEXT}</p>
        </div>
        <hr className="my-8" />
        <div>
          <h4 className="font-medium text-xl">{JOB_TWO_TITLE}</h4>
          <p className="mb-6 h-1/2 pt-5">{JOB_TWO_TEXT}</p>
        </div>
        <hr className="my-8" />
        <div>
          <h4 className="font-medium text-xl">{JOB_THREE_TITLE}</h4>
          <p className="mb-6 h-1/2 pt-5">{JOB_THREE_TEXT}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
