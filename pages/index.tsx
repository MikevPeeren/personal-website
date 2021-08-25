// Next.JS
import Head from 'next/head';
import { useRouter } from 'next/router';

// React
import React, { ReactElement, FC, useEffect, useRef } from 'react';

// External
import smoothscroll from 'smoothscroll-polyfill';

// Components
import NavBar from './components/Navbar';
import EntryPage from './components/EntryPage';
import AboutPage from './components/AboutPage';
import SkillPage from './components/SkillPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';

// Constants
import { AUTHOR, META_TITLE, META_DESCRIPTION } from '../constants/general';

const Home: FC = (): ReactElement => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Setting Canonical for SEO
  const site = 'https://mikevpeeren.nl';
  const canURL = site + useRouter().pathname;

  useEffect(function onFirstMount() {
    // Kick off the polyfill!
    smoothscroll.polyfill();
  }, []);

  const executeScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={homeRef}>
      <Head>
        <title>{META_TITLE}</title>
        <link rel="icon" href="meta/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="meta/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="meta/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="meta/favicon-16x16.png" />
        <link rel="manifest" href="meta/site.webmanifest" />
        <link rel="mask-icon" href="meta/safari-pinned-tab.svg" color="#5bbad5" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet" />

        <link rel="canonical" href={canURL} />
        <meta name="author" content={AUTHOR} />
        <meta name="title" content={META_TITLE} />
        <meta name="description" content={META_DESCRIPTION} />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="keywords"
          content="Frontend, front-end, engineer, developer, software, React, React.js, react query, javascript, JavaScript, typescript, TypeScript, next.js, git, vercel, html5, css3, html, css, tailwind, vercel, gitlab, github"
        />
        <meta name="title" property="og:title" content={META_TITLE} />
        <meta name="description" property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mikevpeeren.nl/" />
        <meta name="image" property="og:image" content="https://www.mikevpeeren.nl/mikevpeeren.jpg" />
        <meta httpEquiv="content-language" content="en" />
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
        <footer className="text-center py-20">Copyright © 2021, All rights reserved.</footer>
      </main>
    </div>
  );
};

export default Home;
