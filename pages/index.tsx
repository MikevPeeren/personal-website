// Next.JS
import Head from 'next/head';
import { useRouter } from 'next/router';

// React
import React, { ReactElement, FC } from 'react';

// Components
import NavBar from './components/Navbar';
import EntryPage from './components/EntryPage';
import AboutPage from './components/AboutPage';

// Constants
import { META_TITLE, META_DESCRIPTION } from '../constants/general';

const Home: FC = (): ReactElement => {
  // Setting Cannonical for SEO
  const site = 'https://www.mikevpeeren.nl';
  const canURL = site + useRouter().pathname;

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
        <EntryPage />
        <AboutPage />
      </main>
    </div>
  );
};

export default Home;
