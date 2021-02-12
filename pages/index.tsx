// Next.JS
import Head from 'next/head';
import { useRouter } from 'next/router';

// External
import classNames from 'classnames';

// React
import { ReactElement, useState } from 'react';

// Hooks
import { useMediaQuery } from '../custom-hooks/useMediaQuery';

// Components
import SocialMedia from './components/SocialMedia';

// Constants
import {
  HEADER,
  META_TITLE,
  META_DESCRIPTION,
  TITLE,
  LOCATION,
  FIRST_PARAGRAPH,
  GET_IN_TOUCH,
} from '../constants/general';

const Home = (): ReactElement => {
  const [openMenu, setOpenMenu] = useState(false);

  // We need this in order to open the Menu on default on screens larger than LG
  const isTailwindLG = useMediaQuery('(min-width: 1024px)');

  // Setting Cannonical for SEO
  const site = 'https://www.mikevpeeren.nl';
  const canURL = site + useRouter().pathname;

  /**
   * Open the default email client in order to send an email
   */
  const openEmail = () => {
    window.open('mailto:mikevpeeren@hotmail.com?subject=Contact Form MikevPeeren.nl&body=Hello Mike,');
  };

  /**
   * Set the state on the menu
   */
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // Initializing menu
  const navBarClassNames = classNames({
    'NavBar__menu items-center flex-grow lg:flex': true,
    'lg:transition-none lg:translate-x-0 ease-in-out duration-1000 transform': true,
    'translate-x-0': openMenu,
    '-translate-x-full': !openMenu,
  });

  const navBarMenuItems = classNames({
    hidden: !openMenu && !isTailwindLG,
    'NavBar__menu--content ml-auto flex flex-col lg:flex-row': true,
  });

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
        <nav className="NavBar sticky -top-px lg:top-10 w-full items-center flex justify-between py-6 lg:justify-start lg:flex-row flex-wrap">
          <a href="/">
            <img className="w-14" src="./developer.svg" />
          </a>
          <button
            aria-controls="basic-navbar-nav"
            type="button"
            aria-label="Toggle navigation"
            className="lg:hidden focus:outline-none"
            onClick={() => {
              toggleMenu();
            }}
          >
            <span className="navbar-toggler-icon inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                <path
                  stroke="rgba(0, 0, 0, 0.5)"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M4 7h22M4 15h22M4 23h22"
                />
              </svg>
            </span>
          </button>

          <div className={navBarClassNames}>
            <div className={navBarMenuItems}>
              <a className="lg:px-2 py-2 mt-4 lg:mt-0 text-xl opacity-60" href="/" role="button">
                Home
              </a>
              <a className="lg:px-2 py-2 text-xl opacity-60" href="/" role="button">
                About
              </a>
              <a className="lg:px-2 py-2 text-xl opacity-60" href="/" role="button">
                Skills
              </a>
              <a className="lg:px-2 py-2 text-xl opacity-60" href="/" role="button">
                Experience
              </a>
              <a className="lg:px-2 py-2 text-xl opacity-60" href="/" role="button">
                Contact
              </a>
            </div>
          </div>
        </nav>
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col justify-center order-1 w-full lg:w-3/5">
              <h1 className="text-5xl tracking-wider mb-2 mx-auto lg:-ml-0">
                I'm <span className="font-bold">Mike van Peeren</span>
              </h1>
              <h4 className="text-2xl mx-auto lg:-ml-0">
                Node.js & React Enthusiast, Full Stack Developer and loving father.
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
