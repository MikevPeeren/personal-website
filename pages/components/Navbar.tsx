// Next
import Image from "next/image";

// React
import React, { ReactElement, FC, useState } from "react";

// External
import classNames from "classnames";

// Hooks
import { useMediaQuery } from "../../custom-hooks/useMediaQuery";

// Constants
import {
  HOME_HEADER,
  ABOUT_HEADER,
  SKILLS_HEADER,
  EXPERIENCE_HEADER,
  CONTACT_HEADER_NAVBAR,
} from "../../constants/general";

// SVGs
import Developer from "../../public/developer.svg";

interface NavBarProps {
  executeScroll: (ref) => void;
  homeRef: React.MutableRefObject<HTMLDivElement>;
  aboutRef: React.MutableRefObject<HTMLDivElement>;
  skillRef: React.MutableRefObject<HTMLDivElement>;
  experienceRef: React.MutableRefObject<HTMLDivElement>;
  contactRef: React.MutableRefObject<HTMLDivElement>;
}

const NavBar: FC<NavBarProps> = ({
  executeScroll,
  homeRef,
  aboutRef,
  skillRef,
  experienceRef,
  contactRef,
}: NavBarProps): ReactElement => {
  const [openMenu, setOpenMenu] = useState(false);

  // We need this in order to open the Menu on default on screens larger than LG
  const isTailwindLG = useMediaQuery("(min-width: 1024px)");

  /**
   * Set the state on the menu
   */
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // Initializing menu
  const navBarClassNames = classNames({
    "NavBar__menu items-center flex-grow lg:flex": true,
    "lg:transition-none lg:translate-x-0 ease-in-out duration-1000 transform":
      true,
    "translate-x-0": openMenu,
    "-translate-x-full": !openMenu,
  });

  const navBarMenuItems = classNames({
    hidden: !openMenu && !isTailwindLG,
    "NavBar__menu--content ml-auto flex flex-col lg:flex-row": true,
  });

  return (
    <nav className="NavBar sticky -top-px w-full items-center flex justify-between py-6 lg:justify-start lg:flex-row flex-wrap z-10">
      <a href="#" title="home">
        <div className="w-14">
          <Image
            className="z-0"
            src={Developer}
            alt="developer-logo"
            width={50}
            height={50}
          />
        </div>
      </a>
      <button
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
          <a
            className="lg:px-4 py-2 mt-4 lg:mt-0 text-xl opacity-80"
            onClick={() => {
              executeScroll(homeRef);
            }}
            role="button"
          >
            {HOME_HEADER}
          </a>
          <a
            className="lg:px-4 py-2 text-xl opacity-80"
            onClick={() => {
              executeScroll(aboutRef);
            }}
            role="button"
          >
            {ABOUT_HEADER}
          </a>
          <a
            className="lg:px-4 py-2 text-xl opacity-80"
            onClick={() => {
              executeScroll(skillRef);
            }}
            role="button"
          >
            {SKILLS_HEADER}
          </a>
          <a
            className="lg:px-4 py-2 text-xl opacity-80"
            onClick={() => {
              executeScroll(experienceRef);
            }}
            role="button"
          >
            {EXPERIENCE_HEADER}
          </a>
          <a
            className="lg:px-4 py-2 text-xl opacity-80"
            onClick={() => {
              executeScroll(contactRef);
            }}
            role="button"
          >
            {CONTACT_HEADER_NAVBAR}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
