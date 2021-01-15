// Next.JS
import Link from 'next/link';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = () => {
  return (
    <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
      <div className="cursor-pointer m-2" title="LinkedIn">
        <Link href="https://www.linkedin.com/in/mikevpeeren/">
          <FontAwesomeIcon className="h-10 text-green-700" icon={['fab', 'linkedin']} />
        </Link>
      </div>
      <div className="cursor-pointer m-2" title="GitLab">
        <Link href="https://gitlab.com/MikevPeeren/">
          <FontAwesomeIcon className="h-10 text-green-700" icon={['fab', 'gitlab']} />
        </Link>
      </div>
      <div className="cursor-pointer m-2" title="Github">
        <Link href="https://github.com/MikevPeeren/">
          <FontAwesomeIcon className="h-10 text-green-700" icon={['fab', 'github']} />
        </Link>
      </div>
      <div className="cursor-pointer m-2" title="Medium">
        <Link href="https://medium.com/@mikevpeeren/">
          <FontAwesomeIcon className="h-10 text-green-700" icon={['fab', 'medium']} />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
