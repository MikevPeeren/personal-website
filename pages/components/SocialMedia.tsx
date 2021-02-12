// React
import React, { ReactElement, FC } from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia: FC = (): ReactElement => {
  return (
    <>
      <div className="cursor-pointer mr-4" title="LinkedIn">
        <a href="https://www.linkedin.com/in/mikevpeeren/">
          <FontAwesomeIcon className="h-8" icon={['fab', 'linkedin']} />
        </a>
      </div>
      <div className="cursor-pointer mr-4" title="GitLab">
        <a href="https://gitlab.com/MikevPeeren/">
          <FontAwesomeIcon className="h-8" icon={['fab', 'gitlab']} />
        </a>
      </div>
      <div className="cursor-pointer mr-4" title="Github">
        <a href="https://github.com/MikevPeeren/">
          <FontAwesomeIcon className="h-8" icon={['fab', 'github']} />
        </a>
      </div>
      <div className="cursor-pointer mr-4" title="Medium">
        <a href="https://medium.com/@mikevpeeren/">
          <FontAwesomeIcon className="h-8" icon={['fab', 'medium']} />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
