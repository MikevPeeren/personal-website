// React
import React, { ReactElement, FC, useState } from 'react';

// External
import classNames from 'classnames';

// Hooks
import { useMediaQuery } from '../../custom-hooks/useMediaQuery';

interface NavBarProps {
  executeScroll: (ref) => void;
  homeRef: ref;
  aboutRef: ref;
}

const NavBar: FC<NavBarProps> = ({ executeScroll, homeRef, aboutRef }: NavBarProps): ReactElement => {
  const [openMenu, setOpenMenu] = useState(false);

  // We need this in order to open the Menu on default on screens larger than LG
  const isTailwindLG = useMediaQuery('(min-width: 1024px)');

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
    <nav className="NavBar sticky -top-px w-full items-center flex justify-between py-6 lg:justify-start lg:flex-row flex-wrap">
      <a href="#">
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
          <a
            className="lg:px-2 py-2 mt-4 lg:mt-0 text-xl opacity-60"
            onClick={() => {
              executeScroll(homeRef);
            }}
            role="button"
          >
            Home
          </a>
          <a
            className="lg:px-2 py-2 text-xl opacity-60"
            onClick={() => {
              executeScroll(aboutRef);
            }}
            role="button"
          >
            About
          </a>
          <a className="lg:px-2 py-2 text-xl opacity-60" href="#" role="button">
            Skills
          </a>
          <a className="lg:px-2 py-2 text-xl opacity-60" href="#" role="button">
            Experience
          </a>
          <a className="lg:px-2 py-2 text-xl opacity-60" href="#" role="button">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
