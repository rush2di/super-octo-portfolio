import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { GoogleAnalytics } from "nextjs-google-analytics";

import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";

library.add(fas, far, fab);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
