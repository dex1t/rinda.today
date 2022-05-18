import type { NextPage } from "next";
import { css } from "@emotion/react";
import tokens from "../components/DesignTokens";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RINDA | Craft Vinegar Drink</title>
      </Head>

      <main css={layoutStyle}>
        <div>
          <h2>#RINDA_TODAY</h2>
          <p>under construction</p>
        </div>
      </main>
    </>
  );
};

export default Home;

const layoutStyle = css`
  width: ${tokens.siteWidth.pc};
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${tokens.siteWidth.mobile}) {
    width: 100%;
  }
`;
