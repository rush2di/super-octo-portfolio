import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin, faFigma } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { GoogleAnalytics } from "nextjs-google-analytics";

import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";

library.add(faEnvelope, faExternalLinkAlt, faGithub, faLinkedin, faFigma);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
