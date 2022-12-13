import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Textillate } from "textillate-react";
import Next from "./Next/Next";
import UNHCRLogo from "../assets/unhcr.svg";
import STCLogo from "../assets/stc-logo.svg";
import { variants } from "../Cube/Cube";
import Face, {
  Text,
  Headline,
  AnimatedText,
  AnimatedHeadline,
} from "./Face.jsx";

import { motion } from "framer-motion";

const Logo = styled(motion.div)`
  background-color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  margin: 1rem auto 1rem auto;
  & img {
    height: ${(props) => (props.height ? props.height : `100%`)};
    width: ${(props) => (props.width ? props.width : `auto`)};
  }
`;

export default function FaceFive({
  cubeController,
  cubeStates,
  state,
  animationDuration,
}) {
  let [animCount, setAnimCount] = useState(0);
  return (
    <Face>
      {state === variants.FaceFiveClose || animCount >= 1 ? (
        <AnimatedHeadline
          delay={animationDuration}
          callback={() => setAnimCount(animCount + 1)}
        >
          Opportunities to Help
        </AnimatedHeadline>
      ) : null}
      {animCount || animCount >= 1 ? (
        <a
          href="https://www.savethechildren.org/us/charity-stories/ethiopia-tigray-region-conflict-facts-faqs-how-to-help"
          target="_blank"
          rel="external"
        >
          <Logo
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: "100%", opacity: 0 }}
            onAnimationComplete={() => setAnimCount(animCount + 1)}
            width={"20rem"}
          >
            <img src={STCLogo} alt="Save the Children logo" />
            {/* <STCLogo /> */}
          </Logo>
        </a>
      ) : // <AnimatedText callback={() => setAnimCount(animCount + 1)}>
      //   [Save The Children] -
      //
      // </AnimatedText>
      null}
      {animCount >= 2 ? (
        <a
          href="https://give.unrefugees.org/201120emer_etpref_c_4690?SF_onetime=7011K000001G9iNQAS&SF_monthly=7011K000001G9iSQAS"
          target="_blank"
          rel="external"
        >
          <Logo
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: "100%", opacity: 0 }}
            onAnimationComplete={() => setAnimCount(animCount + 1)}
            width={"20rem"}
          >
            {/* <UNHCRLogo /> */}
            <img src={UNHCRLogo} alt="UNHCR logo" />
          </Logo>
        </a>
      ) : // <AnimatedText callback={() => setAnimCount(animCount + 1)}>
      //   [UNHCR] -
      //
      // </AnimatedText>
      null}
      {animCount >= 3 ? (
        <Next
          animation={{ opacity: [0, 1] }}
          callback={() => {
            cubeController(cubeStates.FaceSixClose);
          }}
        >
          {/* <Text>&gt;</Text> */}
        </Next>
      ) : null}
    </Face>
  );
}
