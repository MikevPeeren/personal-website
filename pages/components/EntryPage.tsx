// Next
import Image from 'next/image';

// React
import React, { ReactElement, FC } from 'react';

// Components
import SocialMedia from './SocialMedia';

// Constants
import { HEADER, SUBHEADER } from '../../constants/general';

// Images
import MikevPeerenPic from '../../public/mikevpeeren.webp';

const EntryPage: FC = (): ReactElement => {
  return (
    <div className="mt-20">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center order-1 w-full lg:w-3/5">
          <h1 className="text-5xl mb-2 mx-auto md:-ml-0">
            I&apos;m <span className="font-medium">{HEADER}</span>
          </h1>
          <h2 className="text-2xl mx-auto md:-ml-0">{SUBHEADER}</h2>

          <div className="flex flex-row order-1 lg:w-3/5 mt-8 mx-auto md:-ml-0">
            <SocialMedia />
          </div>
        </div>
        <div className="flex flex-row lg:justify-end order-2 w-full mt-8 lg:mt-0 lg:w-2/5 mb-8">
          <div className="EntryPage__image lg:w-10/12 w-8/12 lg:mr-0 mx-auto md:-ml-0">
            <Image
              className="rounded-xl z-0"
              src={MikevPeerenPic}
              alt="personal-photo"
              width={400}
              height={400}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
