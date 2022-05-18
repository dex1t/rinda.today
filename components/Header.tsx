import { css } from "@emotion/react";
import Link from "next/link";
import tokens from "./DesignTokens";
import Image from "next/image";
//@ts-ignore
import { Link as Scroll } from "react-scroll";

export default function Header() {
  return (
    <header>
      <nav css={navStyle}>
        <Link href="/">
          <a>
            <Image
              src="/poc.svg"
              width={185}
              height={35}
              alt="pinch of spice logo"
              priority
            />
          </a>
        </Link>
        <ul>
          <li>
            <Scroll to="product" smooth>
              Product
            </Scroll>
          </li>
          <li>
            <Scroll to="news" smooth>
              News
            </Scroll>
          </li>
          <li>
            <Scroll to="company" smooth>
              Company
            </Scroll>
          </li>
          <li>
            <Scroll to="member" smooth>
              Member
            </Scroll>
          </li>
          <li>
            <Scroll to="contact" smooth>
              Contact
            </Scroll>
          </li>
        </ul>
      </nav>
      <section css={heroStyle}>
        <Image
          src="/main.jpg"
          width={1024}
          height={609}
          priority
          alt="eyecatch"
          layout="fill"
          objectFit={"cover"}
          css={{
            borderRadius: "1px",
          }}
        />
        <div css={heroHeadingStyle}>
          <h1>
            まるでひとつまみの
            <br />
            スパイスのように。
          </h1>
          <p>
            ピンチオブスパイス合同会社は
            <br />
            日常にいろどりを加える
            <br />
            商品を企画しています。
          </p>
        </div>
        <Scroll to="product" smooth css={downStyle}>
          <Image src="/down.svg" width={38} height={19} alt="scroll down" />
        </Scroll>
      </section>
    </header>
  );
}

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;

    li {
      margin-left: 24px;

      a {
        cursor: pointer;
        display: block;

        &:hover {
          color: ${tokens.colors.red};

          &::after {
            display: block;
            margin: 1px auto 0;
            width: 80%;
            height: 1px;
            background: ${tokens.colors.red};
            content: "";
          }
        }
      }
    }
  }

  @media (max-width: ${tokens.siteWidth.mobile}) {
    padding: 0 10px;

    ul {
      display: none;
    }
  }
`;

const heroStyle = css`
  margin: 32px 0;
  position: relative;
  height: 609px;

  @media (max-width: ${tokens.siteWidth.mobile}) {
    height: 500px;
  }
`;

const heroHeadingStyle = css`
  position: absolute;
  color: ${tokens.colors.white};
  left: 32px;
  top: 32px;

  h1 {
    font-size: 36px;
    letter-spacing: 0.1em;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
    line-height: 1.8;
  }
`;

const downStyle = css`
  position: absolute;
  left: 50%;
  bottom: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
