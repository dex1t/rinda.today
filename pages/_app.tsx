import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
import tokens from "../components/DesignTokens";
import { trackPageView } from "../hooks/trackPageView";
import "ress";

function MyApp({ Component, pageProps }: AppProps) {
  trackPageView();
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

const globalStyle = css`
  html,
  body {
    font-family: -apple-system, "Helvetica Neue", "游ゴシック体", YuGothic,
      "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic",
      "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
    color: ${tokens.colors.black};
    background: #e4e1de;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "palt";
    font-size: 16px;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
      text-decoration: inherit;
    }
  }
`;
