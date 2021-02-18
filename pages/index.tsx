// Next.JS
import Head from 'next/head';
import { useRouter } from 'next/router';

// React
import React, { ReactElement, FC, useRef } from 'react';

// GA
import ReactGA from 'react-ga';

// Components
import NavBar from './components/Navbar';
import EntryPage from './components/EntryPage';
import AboutPage from './components/AboutPage';
import SkillPage from './components/SkillPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';

// Constants
import { META_TITLE, META_DESCRIPTION } from '../constants/general';

const Home: FC = (): ReactElement => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Setting Canonical for SEO
  const site = 'https://mikevpeeren.nl';
  const canURL = site + useRouter().pathname;

  const executeScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  ReactGA.initialize(process.env.REACT_GA);
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div ref={homeRef}>
      <Head>
        <title>{META_TITLE}</title>
        <link rel="icon" href="./favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href={canURL} />
        <meta name="title" content={META_TITLE} />
        <meta name="description" content={META_DESCRIPTION} />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="keywords"
          content="Full Stack, full stack, full-stack, MERN, developer, software, React, node, node.js, next.js, vercel, html5, css3, html, css, tailwind, google cloud, google, gitlab, github, linkedin"
        />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mikevpeeren.nl/" />
        <meta property="og:image" content="https://www.mikevpeeren.nl/mikevpeeren.webp" />
        <meta httpEquiv="content-language" content="en-us" />
      </Head>

      <main>
        <NavBar
          executeScroll={executeScroll}
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillRef={skillRef}
          experienceRef={experienceRef}
          contactRef={contactRef}
        />
        <EntryPage />
        <AboutPage aboutRef={aboutRef} />
        <SkillPage skillRef={skillRef} />
        <ExperiencePage experienceRef={experienceRef} />
        <ContactPage contactRef={contactRef} />
        <footer className="text-center py-20">Copyright © 2020, All rights reserved.</footer>
      </main>
    </div>
  );
};

export default Home;
