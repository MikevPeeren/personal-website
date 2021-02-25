// React
import React, { ReactElement, FC } from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia: FC = (): ReactElement => {
  return (
    <>
      <div className="cursor-pointer mr-4">
        <a href="https://www.linkedin.com/in/mikevpeeren/" title="linkedIn">
          <FontAwesomeIcon className="h-8" icon={['fab', 'linkedin']} />
        </a>
      </div>
      <div className="cursor-pointer mr-4">
        <a href="https://gitlab.com/MikevPeeren/" title="GitLab">
          <FontAwesomeIcon className="h-8" icon={['fab', 'gitlab']} />
        </a>
      </div>
      <div className="cursor-pointer mr-4">
        <a href="https://github.com/MikevPeeren/" title="Github">
          <FontAwesomeIcon className="h-8" icon={['fab', 'github']} />
        </a>
      </div>
      <div className="cursor-pointer mr-4">
        <a href="https://medium.com/@mikevpeeren/" title="Medium">
          <FontAwesomeIcon className="h-8" icon={['fab', 'medium']} />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
