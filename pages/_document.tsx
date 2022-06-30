import { Html, Head, Main, NextScript } from "next/document";
import { GA_ID } from "../utils/gtag";

export default function Document() {
  const title = "RINDA（リンダ）| 奈良生まれのクラフトビネガードリンク";
  const desc =
    "あなたのひとときに寄り添う奈良生まれのクラフトビネガードリンク「RINDA」。ハーブやスパイスの風味を最大限引き出した新しい味わいのドリンクです。ノンアルコール、カフェインフリー、添加物不使用。";
  const url = "https://rinda.today/";
  const ogp = `${url}ogp.jpg`;

  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Pinch of Spice, LLC." />
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={ogp} />
        <meta name="twitter:image" content={ogp} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:card" content="summary" />
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${GA_ID}', {
                     page_path: window.location.pathname,
                   });`,
              }}
            />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
