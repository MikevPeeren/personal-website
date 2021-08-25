// React
import React, { ReactElement, FC } from 'react';

// Next
import Image from 'next/image';

import LINKEDIN_ICON from '../../public/icons/linkedin.svg';
import GITLAB_ICON from '../../public/icons/gitlab.svg';
import GITHUB_ICON from '../../public/icons/github.svg';
import MEDIUM_ICON from '../../public/icons/medium.svg';

const SocialMedia: FC = (): ReactElement => {
  return (
    <>
      <div className="cursor-pointer mr-4">
        <a href="https://gitlab.com/MikevPeeren/" title="GitLab">
          <Image src={GITLAB_ICON} alt="gitlab-logo" width={35} height={35} />
        </a>
      </div>
      <div className="cursor-pointer mr-4">
        <a href="https://github.com/MikevPeeren/" title="Github">
          <Image src={GITHUB_ICON} alt="github-logo" width={35} height={35} />
        </a>
      </div>
      <div className="cursor-pointer mr-4">
        <a href="https://www.linkedin.com/in/mikevpeeren/" title="linkedIn">
          <Image src={LINKEDIN_ICON} alt="linkedin-logo" width={35} height={35} />
        </a>
      </div>
      <div className="cursor-pointer mr-4">
        <a href="https://medium.com/@mikevpeeren/" title="Medium">
          <Image src={MEDIUM_ICON} alt="medium-logo" width={35} height={35} />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
