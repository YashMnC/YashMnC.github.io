import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi!
        <br />I am Yash Meshram.
      </SectionTitle>
      <SectionText>MERN stack web developer.</SectionText>
      <SectionText>
        I am pursuing Integrated Master of Technology in Mathematics and
        Computing at IIT (ISM) Dhanbad.
      </SectionText>
      <Button
        onClick={() =>
          window.open("https://www.linkedin.com/in/yashmnc/", "_blank")
        }
      >
        Connect With Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
