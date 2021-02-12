// NextJS
import { AppProps } from 'next/app';

// React
import React, { ReactElement } from 'react';

// Style Imports
import '../styles/global.scss';
import '../styles/tailwind.scss';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
