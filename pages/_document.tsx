import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const title = "RINDA（リンダ）| 奈良生まれのクラフトビネガードリンク";
  const desc =
    "あなたのひとときに寄り添う奈良生まれのクラフトビネガードリンク「RINDA」。ハーブやスパイスの風味を最大限引き出した新しい味わいのドリンクです。ノンアルコール、カフェインフリー、添加物不使用。";
  const url = "https://rinda.today/";
  const ogp = "/ogp.jpg";

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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
