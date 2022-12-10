import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Textillate } from "textillate-react";
import Next from "../assets/next.svg";
import Face, {
  Text,
  Headline,
  AnimatedText,
  AnimatedHeadline,
} from "./Face.jsx";
import Region from "./regions-of-ethiopia.jpg";
import { motion } from "framer-motion";

const ImageWrapper = styled(motion.div)`
  position: relative;
  margin: 0;
  opacity: 0;
  transform: translateY(-100%);
  & > img {
    max-height: 510px;
    max-width: 510px;
    margin: 0;
    @media screen and (max-width: 1895px) {
      max-height: 475px;
      max-width: 475px;
    }
  }
`;

const ImageHighlight = styled(motion.div)`
  opacity: 0;
  position: absolute;
  top: 5%;
  left: 20%;
  background-color: transparent;
  border: 3px red dotted;
  border-radius: 5px;
  height: 15%;
  width: 20%;

  @media screen and (min-width: 900px) {
    font-size: 4.5rem;
  }
`;

const bounce = keyframes`
0% {
  transform: translateY(0);
  box-shadow: 0px 0px 5px transparent;
  background-color: rgba(225, 225, 225, 0.35);
  border: 2px solid rgba(205, 205, 245, 0.75);
}
40% {
  transform: translateY(0);
  box-shadow: 0px 0px 15px rgba(252, 161, 125, 0);
  border: 2px solid rgba(205, 205, 245, 0.75);
background-color: rgba(225, 225, 225, 0.35);
}
50% {
  transform: translateY(-1rem);
  background-color: rgba(225, 225, 225, 0.65);
  border: 2px solid #FCA17D;
  box-shadow: 0px 0px 30px rgba(250, 186, 71, .9);
}
60% {
  transform: translateY(0);
  color: rgba(205, 205, 245, 0.75);
   border: 2px solid rgba(205, 205, 245, 0.75);
  box-shadow: 0px 0px 30px rgba(250, 186, 71, 0);
  background-color: rgba(225, 225, 225, 0.35);
}
100% {
  transform: translateY(0);
  box-shadow: 0px 0px 30px rgba(250, 186, 71, 0);
}
`;

const pulse = keyframes`
0% {
  color: rgba(205, 205, 245, 0.9);
}
40% {
  color: rgba(205, 205, 245, 0.9);
}
50% {
  color: #FABA47;
}
60% {
  color: rgba(205, 205, 245, 0.9);
}
100% {
  color: rgba(205, 205, 245, 0.9);
}
`;

const NextButton = styled(motion.div)`
  color: rgba(205, 205, 245, 0.75);
  background-color: rgba(225, 225, 225, 0.35);
  border: 2px solid rgba(205, 205, 245, 0.75);
  padding: 0;
  position: absolute;
  top: 45%;
  right: -15%;
  border-radius: 10px;
  cursor: pointer;
  & > p {
    margin: 0;
    font-size: 1.75rem;
    padding: 0.5rem;
    animation: ${pulse} 10s ease-in-out infinite;
  }
  animation: ${bounce} 10s ease-in-out infinite;
`;

export default function FaceOne({ cubeController, cubeStates }) {
  let [showPg1, setShowPg1] = useState(false);
  let [showImg, setShowImg] = useState(false);
  let [showNextButton, setShowNextButton] = useState(false);
  let [showImageHighlight, setShowImageHighlight] = useState(false);
  // let [rotateToSide2, setRotateToSide2] = useState(false);

  // useEffect(() => {
  //   // manage animation to next view (cube face 2) here

  //   return () => {
  //     //   callback? dope
  //   };
  // }, [rotateToSide2]);

  const nextButton = (
    <NextButton
      animate={{
        opacity: 1,
      }}
      transition={{
        ease: "easeOut",
        duration: 2,
        // times: [0, 0.5, 0.75, 0.85, 1],
        // repeat: Infinity,
        // repeatDelay: 2.5,
      }}
      initial={{ opacity: 0 }}
      onClick={() => {
        cubeController(cubeStates.FaceTwoClose);
      }}
    >
      <Text>&gt;</Text>
    </NextButton>
  );

  const Paragraph1 = (
    <AnimatedText callback={() => setShowImg(true)}>
      Tigray is a landlocked agricultural region in Northwestern Ethiopia with,
      estimated in 2019 to have a population of 5.4 million, primarily
      concentrated in the central and eastern highlands. Tigrayans are an ethnic
      group and have their own regional government, which from ‘94-’20 shared
      power with three other regional ethnic governments of Ethiopia after the
      overthrow of the previous regime. In 2020 the current prime minister of
      Ethiopia dissolved the other three ethnic political parties in favor of a
      pan-Ethiopian party known as the Prosperity Party.
    </AnimatedText>
  );
  const EthImage = (
    <ImageWrapper
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
      onAnimationComplete={() => setShowImageHighlight(true)}
    >
      <img src={Region} alt="Regions of Ethiopia" />
      {showImageHighlight ? (
        <ImageHighlight
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1 }}
          onAnimationComplete={() => {
            setShowNextButton(true);
          }}
        />
      ) : null}
      {showNextButton ? nextButton : null}
    </ImageWrapper>
  );

  return (
    <Face>
      <AnimatedHeadline callback={() => setShowPg1(true)}>
        Prelude
      </AnimatedHeadline>
      {showPg1 ? Paragraph1 : null}
      {showImg ? EthImage : null}
    </Face>
  );
}
