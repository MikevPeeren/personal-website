// Next.JS
import Head from 'next/head';
import { useRouter } from 'next/router';

// React
import React, { ReactElement, FC } from 'react';

// Components
import SocialMedia from './components/SocialMedia';
import NavBar from './components/Navbar';

// Constants
import { META_TITLE, META_DESCRIPTION } from '../constants/general';

const Home: FC = (): ReactElement => {
  // Setting Cannonical for SEO
  const site = 'https://www.mikevpeeren.nl';
  const canURL = site + useRouter().pathname;

  /**
   * Open the default email client in order to send an email
   */
  const openEmail = () => {
    window.open('mailto:mikevpeeren@hotmail.com?subject=Contact Form MikevPeeren.nl&body=Hello Mike,');
  };

  return (
    <div>
      <Head>
        <title>{META_TITLE}</title>
        <link rel="icon" href="./favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href={canURL} />
        <meta name="title" content={META_TITLE} />
        <meta name="description" content={META_DESCRIPTION} />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mikevpeeren.nl/" />
        <meta property="og:image" content="https://www.mikevpeeren.nl/mikevpeeren.webp" />
        <meta httpEquiv="content-language" content="en-us" />
      </Head>

      <main>
        <NavBar />
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col justify-center order-1 w-full lg:w-3/5">
              <h1 className="text-5xl tracking-wider mb-2 mx-auto lg:-ml-0">
                I&apos;m <span className="font-bold">Mike van Peeren</span>
              </h1>
              <h4 className="text-2xl mx-auto lg:-ml-0">
                Node.js & React Enthusiast, Full Stack Developer and Loving Father.
              </h4>

              <div className="flex flex-row order-1 lg:w-3/5 mt-8 mx-auto lg:-ml-0">
                <SocialMedia />
              </div>
            </div>
            <div className="flex flex-row lg:justify-end order-2 w-full mt-8 lg:mt-0 lg:w-2/5 mb-8">
              <img
                className="lg:w-10/12 w-8/12 lg:mr-0 rounded-xl shadow-xl mx-auto lg:-ml-0"
                src="https://www.mikevpeeren.nl/mikevpeeren.webp"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
