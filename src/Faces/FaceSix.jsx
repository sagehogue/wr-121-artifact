import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaRegFileWord, FaLink } from "react-icons/fa";

import Next from "./Next/Next";
import UNHCRLogo from "../assets/unhcr.svg";
import STCLogo from "../assets/stc-logo.svg";

import Face, { AnimatedText, AnimatedHeadline } from "./Face.jsx";

import { motion } from "framer-motion";

const Logo = styled(motion.div)`
  background-color: transparent;
  padding: 1rem;
  border-radius: 10px;
  margin: 0.5rem auto 0.5rem auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: ${(props) => (props.height ? props.height : `100%`)};
  width: ${(props) => (props.width ? props.width : `auto`)};
  max-width: 90vw;
  min-width: 30vw;
  border: 2px solid rgba(240, 240, 240, 0.35);
  & svg {
    // margin: auto;
  }
`;
const LinkList = styled(motion.ul)`
  color: lightblue;
  underline: none;
  text-align: left;
  // margin: auto;
  width: 65%;
  padding: 1.25rem;
  li::before {
    color: lightblue;
  }
`;
const TextBox = styled.div`
  max-width: 75%;

  & p {
    text-align: left;
  }
`;

const Link = styled.a`
  color: lightblue;
`;

export default function FaceSix({
  cubeController,
  cubeStates,
  state,
  animationDuration,
}) {
  let [animCount, setAnimCount] = useState(0);
  return (
    <Face>
      {state === cubeStates.FaceSixClose || animCount >= 1 ? (
        <AnimatedHeadline
          delay={animationDuration}
          callback={() => setAnimCount(animCount + 1)}
        >
          Sources
        </AnimatedHeadline>
      ) : null}

      {animCount || animCount >= 1 ? (
        <Link
          href="https://docs.google.com/document/d/1DBdA-3QJxEmDqbuufPpgROo0Uj6pOBap1RaGDFNTKBI/"
          target="_blank"
          rel="external"
        >
          <Logo
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: "20%", opacity: 0 }}
            transition={{ duration: 1.5 }}
            onAnimationComplete={() => setAnimCount(animCount + 1)}
            // width={"inherit"}
            height={"10rem"}
          >
            <FaRegFileWord size={75} />
            {/* <img src={} alt="Link to Arsema Berhe Essay" /> */}
            <TextBox>
              <AnimatedText callback={() => setAnimCount(animCount + 1)}>
                The primary inspiration for this project was an essay by my
                classmate Arsema Berhe, who wrote in a very compelling manner on
                the educational disruption created by the war for the children
                of Tigray. Click here to view it.
              </AnimatedText>
            </TextBox>
            {/* <STCLogo /> */}
          </Logo>
        </Link>
      ) : null}
      {animCount >= 2 ? (
        <Logo
          initial={{ x: "20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onAnimationComplete={() => setAnimCount(animCount + 1)}
          // width={"inherit"}
          height={"10rem"}
          transition={{ duration: 1.5 }}
        >
          {/* <UNHCRLogo /> */}
          <FaLink size={75} color={"lightblue"} />
          <LinkList>
            <li>
              <Link href="https://en.wikipedia.org/wiki/Tigray_War">
                Wikipedia - Tigray War
              </Link>
            </li>
            <li>
              <Link href="https://en.wikipedia.org/wiki/Tigray_Region">
                Wikipedia - Tigray Region
              </Link>
            </li>
            <li>
              <Link href="https://en.wikipedia.org/wiki/Abiy_Ahmed">
                Wikipedia - Abiy Ahmed
              </Link>
            </li>
            <li>
              <Link href="https://www.cnn.com/2022/11/11/world/tigray-war-fast-facts/index.html">
                CNN - Tigray War Fast Facts
              </Link>
            </li>
            <li>
              <Link href=" https://www.unrefugees.org/emergencies/ethiopia/">
                UN Refugees - Ethiopian Emergency
              </Link>
            </li>
          </LinkList>
        </Logo>
      ) : null}
      {/* {animCount >= 3 ? (
        <Next
          animation={{ opacity: [0, 1] }}
          callback={() => {
            cubeController(cubeStates.FaceOneClose);
          }}
        ></Next>
      ) : null} */}
    </Face>
  );
}
