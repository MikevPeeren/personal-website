// React
import React, { ReactElement, FC } from 'react';

// Constants
import { CONTACT_HEADER } from '../../constants/general';

interface ContactPageProps {
  contactRef: React.MutableRefObject<HTMLDivElement>;
}

const ContactPage: FC<ContactPageProps> = ({ contactRef }: ContactPageProps): ReactElement => {
  return (
    <div ref={contactRef} className="py-28">
      <h3 className="text-3xl font-semibold mb-14 -ml-0">{CONTACT_HEADER}</h3>
    </div>
  );
};
export default ContactPage;
