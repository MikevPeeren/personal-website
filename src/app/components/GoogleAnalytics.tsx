import Script from "next/script";

const GoogleAnalytics = ({ gaID }: { gaID: string }) => (
  <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`} />
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaID}');
        `}
    </Script>
  </>
);

export default GoogleAnalytics;
