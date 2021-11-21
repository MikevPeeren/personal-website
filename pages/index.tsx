// Next.JS
import Head from "next/head";
import { useRouter } from "next/router";

// React
import React, { ReactElement, FC, useEffect, useRef, RefObject } from "react";

// External
import smoothscroll from "smoothscroll-polyfill";

// Components
import NavBar from "../components/Navbar";
import EntrySection from "../components/sections/EntrySection";
import AboutSection from "../components/sections/AboutSection";
import SkillSection from "../components/sections/SkillSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ContactSection from "../components/sections/ContactSection";

// Constants
import { META_TITLE, META_DESCRIPTION } from "../utils/constants/general";

const Home: FC = (): ReactElement => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Setting Canonical for SEO
  const site = "https://mikevpeeren.nl";
  const canURL = site + useRouter().pathname;

  useEffect(function onFirstMount() {
    // Kick off the polyfill!
    smoothscroll.polyfill();
  }, []);

  const executeScroll = (ref: RefObject<HTMLDivElement>) => {
    if (ref?.current?.scrollIntoView)
      ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={homeRef}>
      <Head>
        <title>{META_TITLE}</title>

        <meta name="title" content={META_TITLE} />
        <meta name="description" content={META_DESCRIPTION} />

        <link rel="canonical" href={canURL} />
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
        <EntrySection />
        <AboutSection aboutRef={aboutRef} />
        <SkillSection skillRef={skillRef} />
        <ExperienceSection experienceRef={experienceRef} />
        <ContactSection contactRef={contactRef} />
        <footer className="text-center py-20">
          Copyright © 2021, All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Home;
