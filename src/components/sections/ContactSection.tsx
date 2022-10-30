// React
import React, { ReactElement, FC } from "react";

// Constants
import {
  CONTACT_HEADER,
  CONTACT_ME,
  MAIL_ME,
  EMAIL,
  FOLLOW_ME,
} from "../../../utils/constants/general";

// Components
import SocialMedia from "../../app/components/SocialMediaRow";

interface ContactSectionProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const ContactSection: FC<ContactSectionProps> = ({
  contactRef,
}: ContactSectionProps): ReactElement => {
  return (
    <div ref={contactRef} className="py-28">
      <h3 className="text-3xl font-semibold mb-14 -ml-0">{CONTACT_HEADER}</h3>
      <h4 className="mb-3 md:mb-4 font-base text-xl">{CONTACT_ME}</h4>
      <div className="md:flex md:flex-row md:justify-between md:w-2/5 mt-10">
        <div className="md:flex md:flex-col">
          <p className="text-lg opacity-80 mb-2">{MAIL_ME}</p>
          <a
            className="underline"
            href="mailto:mikevpeeren@hotmail.com?SUBJECT=👋&BODY=Hello Mike,%0D%0AHallo Mike,%0D%0A %0D%0A I am contacting you through mikevpeeren.nl%0D%0AIk neem contact met je op via mikevpeeren.nl%0D%0A"
          >
            <h5>{EMAIL}</h5>
          </a>
        </div>
        <div className="md:flex md:flex-col mt-8 md:mt-0">
          <p className="text-lg opacity-80 mb-2">{FOLLOW_ME}</p>
          <div className="flex flex-row">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
