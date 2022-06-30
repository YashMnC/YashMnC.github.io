import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <>
    <Container>
      <Div1>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              color: "white",
              marginBottom: "35px",
            }}
          >
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2
        style={{
          display: "flex",

          justifyContent: "space-around",
        }}
      >
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#compi">
            <NavLink>Programming</NavLink>
          </Link>
        </li>
      </Div2>
    </Container>

    <Div3>
      <SocialIcons href="https://github.com/YashMnC" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/yashmnc/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://leetcode.com/yashmnc/" target="_blank">
        <SiLeetcode size="3rem" />
      </SocialIcons>

      <SocialIcons
        href="https://codeforces.com/profile/yashmnc"
        target="_blank"
      >
        <SiCodeforces size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.codechef.com/users/yashmnc"
        target="_blank"
      >
        <SiCodechef size="3rem" />
      </SocialIcons>
    </Div3>
  </>
);

export default Header;
