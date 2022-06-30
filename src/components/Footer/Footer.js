import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111">111-111-1111</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:yashmnc1406@gmail.com" target="_top">
            yashmnc1406@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        {/* <CompanyContainer>
          <Slogan>Innovating one project at a time.</Slogan>
        </CompanyContainer> */}
        <SocialContainer>
          <SocialIcons href="https://github.com/YashMnC" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/yashmnc/"
            target="_blank"
          >
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
