import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { text: "Max Rating: 1761", platform: "Leetcode" },
  { text: "Max Rating: 1615", platform: "Codechef" },
  { text: "Max Rating: 1156", platform: "Codeforces" },
];

const Acomplishments = () => (
  <Section id="compi">
    <SectionTitle>Competitive Programming</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.platform}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
