// NextJS
import { AppProps } from "next/app";

// React
import React, { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";

// Style Imports
import "../styles/global.scss";
import "../styles/tailwind.scss";

// Analytics
import * as gtag from "../utils/analytics/gtag";

// Constants
import { META_TITLE, META_TITLE_ALTERNATIVE } from "../utils/constants/general";

const isProd = process.env.NODE_ENV === "production";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProd) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState == "visible") document.title = META_TITLE;
      else document.title = META_TITLE_ALTERNATIVE;
    });
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
