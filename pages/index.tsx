import type { NextPage } from "next";
import { css } from "@emotion/react";
import tokens from "../components/DesignTokens";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RINDA(リンダ) | 奈良生まれのクラフトビネガードリンク</title>
      </Head>

      <main css={layoutStyle}>
        <section>
          <div>
            <h2>クラフトビネガードリンク</h2>
            <img src="/logo.svg" alt="RINDA" />
          </div>
          <ul>
            <li>
              <a
                href="https://instagram.com/rinda.today/"
                target="_blank"
                rel="noopener noreferrer"
              >
                最新情報
              </a>
            </li>
            <li>
              <a href="https://pinch-of-spice.co/#contact">お問い合わせ</a>
            </li>
          </ul>
        </section>
        <footer>© Pinch of Spice LLC. All Rights Reserved</footer>
      </main>
    </>
  );
};

export default Home;

const layoutStyle = css`
  width: 100%;
  height: 100vh;
  background-image: url("/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;

  > section {
    max-width: ${tokens.siteWidth.pc};
    margin: 0 auto;
    padding: 63px 73px;
  }

  h2 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  img {
    margin-bottom: 22px;
  }

  ul li {
    margin-bottom: 16px;

    a {
      font-weight: bold;
      line-height: 1.75;
      padding-bottom: 5px;
      border-bottom: 1px solid ${tokens.colors.black};

      &:hover {
        opacity: 0.5;
      }
    }
  }

  footer {
    font-size: 11px;
    text-align: center;
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: ${tokens.siteWidth.mobile}) {
    > section {
      max-width: ${tokens.siteWidth.mobile};
      padding: 32px;
    }

    img {
      max-width: 200px;
      width: 100%;
    }

    h2 {
      font-size: 14px;
    }

    ul li {
      font-size: 12px;
    }

    footer {
      font-size: 10px;
    }
  }

  & {
    animation: fadeIn 0.7s ease 0s 1 normal;
  }

  > section,
  footer {
    animation: fadeIn 2s ease 0s 1 normal;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
