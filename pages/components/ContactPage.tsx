// React
import React, { ReactElement, FC } from 'react';

// Constants
import { CONTACT_HEADER } from '../../constants/general';

import SocialMedia from './SocialMedia';

interface ContactPageProps {
  contactRef: React.MutableRefObject<HTMLDivElement>;
}

const ContactPage: FC<ContactPageProps> = ({ contactRef }: ContactPageProps): ReactElement => {
  return (
    <div ref={contactRef} className="py-28">
      <h3 className="text-3xl font-semibold mb-14 -ml-0">{CONTACT_HEADER}</h3>
      <h4 className="mb-3 md:mb-4 font-base text-xl">
        I'm always open to discuss your project and talk about new things!
      </h4>
      <div className="md:flex md:flex-row md:justify-between md:w-2/5 mt-10">
        <div className="md:flex md:flex-col">
          <p className="text-lg opacity-60 mb-2">Mail me at:</p>
          <a href="mailto:mikevpeeren@hotmail.com">
            <h6>mikevpeeren@hotmail.com</h6>
          </a>
        </div>
        <div className="md:flex md:flex-col mt-8 md:mt-0">
          <p className="text-lg opacity-60 mb-2">Follow me:</p>
          <div className="flex flex-row">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
