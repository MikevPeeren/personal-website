// Next.JS
import Head from 'next/head';
import Link from 'next/link';

// React
import { ReactElement } from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Constants
import { HEADER } from '../constants/general';

const Home = (): ReactElement => {
  return (
    <div>
      <Head>
        <title>{HEADER}</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main>
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-6xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-yellow-100 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>

            <div className="relative bg-white px-4 py-10 my-2 shadow-lg rounded-3xl">
              <div className="xl:w-3/5 lg:w-4/5 sm:w-3/4 sm:ml-10">
                <div className="container h-4 mb-8">
                  <nav className="flex justify-between">
                    <div className="rounded-full h-6 w-6 mr-4 sm:ml-4 bg-red-300" />
                    <ul className="flex flex-row items-center">
                      <li className="pr-3 sm:pr-5 uppercase text-xs">
                        <a>Home</a>
                      </li>
                      <li className="pr-3 sm:pr-5 uppercase text-xs">
                        <a>Porfolio</a>
                      </li>
                      <li className="pr-3 sm:pr-5 uppercase text-xs">
                        <a>Contact</a>
                      </li>
                      <li className="pr-3 sm:pr-5 uppercase text-xs">
                        <a>About</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="py-10 sm:px-4">
                  <div className="text-2xl text-red-400 uppercase tracking-widest py-1">Mike van Peeren</div>
                  <div className="text-l tracking-widest py-1">Full Stack Developer & Software Enthusiast</div>
                  <div className="py-10">
                    My website is currently undergoing scheduled maintenance. It should be back shortly. Thank you for
                    your patience.
                  </div>
                </div>
                <div className="sm:py-12">
                  <div className="xl:text-center lg:text-left md:text-center sm:text-center text-center m-2 uppercase tracking-widest">
                    My Social Accounts
                  </div>
                  <div className="flex flex-column items-center justify-center xl:items-center lg:items-start xl:justify-center lg:justify-start md:justify-center">
                    <div className="cursor-pointer m-2 text-gray-400" title="LinkedIn">
                      <Link href="https://www.linkedin.com/in/mikevpeeren/">
                        <FontAwesomeIcon className="h-6" icon={['fab', 'linkedin']} />
                      </Link>
                    </div>
                    <div className="cursor-pointer m-2" title="GitLab">
                      <Link href="https://gitlab.com/MikevPeeren/">
                        <FontAwesomeIcon className="h-6 text-gray-400" icon={['fab', 'gitlab']} />
                      </Link>
                    </div>
                    <div className="cursor-pointer m-2" title="Github">
                      <Link href="https://github.com/MikevPeeren/">
                        <FontAwesomeIcon className="h-6 text-gray-400" icon={['fab', 'github']} />
                      </Link>
                    </div>
                    <div className="cursor-pointer m-2" title="Medium">
                      <Link href="https://medium.com/@mikevpeeren/">
                        <FontAwesomeIcon className="h-6 text-gray-400" icon={['fab', 'medium']} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="hidden md:block fixed bottom-0 xl:left-2/4 lg:right-auto md:left-96 sm:left-80 xl:visible">
            <img className="" src="./miketrnS.png"></img>
          </div> */}
        </div>
      </main>

      {/* <footer></footer> */}
    </div>
  );
};

export default Home;
