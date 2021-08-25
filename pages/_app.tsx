// NextJS
import { AppProps } from 'next/app';

// React
import React, { ReactElement, useEffect } from 'react';

// Style Imports
import '../styles/global.scss';
import '../styles/tailwind.scss';

// Constants
import { META_TITLE, META_TITLE_ALTERNATIVE } from '../constants/general';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState == 'visible') document.title = META_TITLE;
      else document.title = META_TITLE_ALTERNATIVE;
    });
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
