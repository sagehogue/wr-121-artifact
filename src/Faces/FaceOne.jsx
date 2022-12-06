import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Textillate } from "textillate-react";
import Face, { Text, Headline } from "./Face.jsx";
import Region from "./regions-of-ethiopia.jpg";
import { motion } from "framer-motion";

const ImageWrapper = styled(motion.div)`
  position: relative;
  margin: 0;
  opacity: 0;
  transform: translateY(-100%);
  & > img {
    max-height: 39vh;
    max-width: 39vw;
    margin: 0;
  }
`;

const ImageHighlight = styled(motion.div)`
  opacity: 0;
  position: absolute;
  top: 2vh;
  left: 9.5vw;
  background-color: transparent;
  border: 3px red solid;
  border-radius: 5px;
  height: 7.5vh;
  width: 5vw;
`;

const NextButton = styled(motion.div)`
  color: rgba(250, 250, 250, 0.75);
  background-color: transparent;
  border: 2px solid rgba(250, 250, 250, 0.75);
  padding: 0;
  position: absolute;
  top: 45%;
  right: 0%;
  border-radius: 10px;
  cursor: pointer;
  & > p {
    margin: 0;
    font-size: 2rem;
    padding: 0.3rem;
  }
`;

export default function FaceOne({ cubeController }) {
  let [showPg1, setShowPg1] = useState(false);
  let [showImg, setShowImg] = useState(false);
  let [showNextButton, setShowNextButton] = useState(false);
  let [showImageHighlight, setShowImageHighlight] = useState(false);
  let [rotateToSide2, setRotateToSide2] = useState(false);

  useEffect(() => {
    // manage animation to next view (cube face 2) here

    return () => {
      //   callback? dope
    };
  }, [rotateToSide2]);

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
        setRotateToSide2(true);
      }}
    >
      <Text>&gt;</Text>
    </NextButton>
  );

  const Paragraph1 = (
    <Text>
      <Textillate
        option={{
          in: {
            effect: "fadeInRight",
            delayScale: 0.15,
            callback: () => setShowImg(true),
          },
        }}
      >
        Tigray is a landlocked agricultural region in Northwestern Ethiopia
        with, estimated in 2019 to have a population of 5.4 million, primarily
        concentrated in the central and eastern highlands. Tigrayans are an
        ethnic group and have their own regional government, which from ‘94-’20
        shared power with three other regional ethnic governments of Ethiopia
        after the overthrow of the previous regime. In 2020 the current prime
        minister of Ethiopia dissolved the other three ethnic political parties
        in favor of a pan-Ethiopian party known as the Prosperity Party.
      </Textillate>
    </Text>
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
      <Headline>
        <Textillate
          option={{
            in: {
              effect: "fadeInRightBig",
              delayScale: 0.25,
              callback: () => setShowPg1(true),
            },
          }}
        >
          The War in Tigray
        </Textillate>
      </Headline>
      {showPg1 ? Paragraph1 : null}
      {showImg ? EthImage : null}
    </Face>
  );
}
