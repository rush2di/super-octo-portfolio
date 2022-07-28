import Head from "next/head";
import { SeoProps } from "./types";

const SEO = ({ title, description }: SeoProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:image" content="/images/thumbnail_main.png" />
        <meta property="og:site_name" content="ROCHDI BELHIRCH" />
        <meta property="og:title" content={`ROCHDI BELHIRCH | ${title}`} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={`ROCHDI BELHIRCH | ${title}`} />
        <meta name="twitter:image" content="/images/thumbnail_main.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="web developer,frontend specialist,React developer,Rochdi Belhirch,mobile developer,UI/UX design,web designer,React developer"
        ></meta>
        <title>{title} | ROCHDI BELHIRCH</title>
      </Head>
    </>
  );
};

export default SEO;
