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
        <div className="flex flex-wrap md items-center h-screen">
          <div className="bg-white w-full md:w-1/2 h-screen">
            <div className="mx-16 md:mx-32 p-4">
              <h1 className="text-6xl font-bold mt-16">Mike van Peeren</h1>

              <div className="flex mt-16 font-light text-gray-500">
                <div className="pr-4">
                  <span className="uppercase">Currently</span>
                  <p className="text-2xl text-gray-900 font-semibold pt-2">Under Construction...</p>
                </div>
              </div>

              <div className="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm">
                My website is currently undergoing scheduled maintenance. It should be back shortly. Thanks you for your
                patience.
              </div>
            </div>
            <div className="mx-16 md:mx-32 p-4">
              <div className="flex flex-column">
                <div className="cursor-pointer pr-2" title="LinkedIn">
                  <Link href="https://www.linkedin.com/in/mikevpeeren/">
                    <FontAwesomeIcon className="h-6" icon={['fab', 'linkedin']} />
                  </Link>
                </div>
                <div className="cursor-pointer px-2" title="GitLab">
                  <Link href="https://www.linkedin.com/in/mikevpeeren/">
                    <FontAwesomeIcon className="h-6" icon={['fab', 'gitlab']} />
                  </Link>
                </div>
                <div className="cursor-pointer px-2" title="Github">
                  <Link href="https://www.linkedin.com/in/mikevpeeren/">
                    <FontAwesomeIcon className="h-6" icon={['fab', 'github']} />
                  </Link>
                </div>
                <div className="cursor-pointer px-2" title="Medium">
                  <Link href="https://www.linkedin.com/in/mikevpeeren/">
                    <FontAwesomeIcon className="h-6" icon={['fab', 'medium']} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-full md:w-1/2 h-screen">
            <img src="./mikevpeeren.jpg" className="h-screen w-full" alt="" />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
