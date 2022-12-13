import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Textillate } from "textillate-react";

let colors = {
  blocktext: `#fff`,
  headline: `#fff`,
};

let fonts = {
  body: `"BIZ UDPMincho", serif`,
  headline: `'Big Shoulders Stencil Display', cursive`,
};

const FaceContent = styled(motion.div)`
  backface-visibility: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: auto;
  //   background-color: rgba(166, 177, 225, 0.45);
  background-color: transparent;
  font-size: 0.85rem;

  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (max-height: 1800px) {
    transform: translateY(3vh);
  }
  @media screen and (max-height: 1000px) {
    transform: translateY(-4vh);
  }
  @media screen and (max-height: 850px) {
    transform: translateY(-2vh);
  }
  @media screen and (max-width: 799px) {
    transform: translateY(-6vh);
  }
  @media screen and (max-width: 680px) {
    transform: translateY(-10vh);
  }
  @media screen and (max-width: 650px) {
    transform: translateY(-12.5vh);
  }
  @media screen and (max-width: 590px) {
    transform: translateY(-15vh);
  }
  @media screen and (max-width: 490px) {
    transform: translateY(-23vh);
  }
  @media screen and (max-width: 420px) {
    transform: translateY(-29vh);
  }
  @media screen and (max-width: 390px) {
    transform: translateY(-26.5vh);
  }
`;

export const Text = styled.p`
  color: ${colors.blocktext};
  padding: 1rem;
  font-family: ${fonts.body};
  line-height: 1.1rem;
  margin: 0.25rem;

  @media screen and (max-width: 1300px) and (min-height: 1000px) {
    // padding: 0.25rem;
    padding: 2rem;
    margin: 0;
  }
  @media screen and (max-width: 800px) {
    padding: 0;
    margin: 0;
    margin-bottom: 0.25rem;
  }
`;

export function AnimatedText({
  children,
  callback = false,
  delay = 0,
  controller = false,
}) {
  return (
    <Text>
      <Textillate
        option={{
          initialDelay: delay * 1000,
          in: {
            effect: "fadeInRight",
            delayScale: 0.15,
            callback,
          },
        }}
      >
        {children}
      </Textillate>
    </Text>
  );
}

export function AnimatedHeadline({
  children,
  callback = false,
  delay = 0,
  controller = false,
}) {
  return (
    <Headline>
      <Textillate
        option={{
          initialDelay: delay * 350,
          in: {
            effect: "fadeInRightBig",
            delayScale: 0.25,
            callback,
          },
        }}
      >
        {children}
      </Textillate>
    </Headline>
  );
}

export const Headline = styled.h1`
  color: ${colors.headline};
  font-family: ${fonts.headline};
  font-size: 5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  @media screen and (max-height: 1895px) {
    margin-top: 2.65rem;
  }
  @media screen and (max-height: 900px) and (max-height: 815px) {
    margin-top: 0.5rem;
  }
  @media screen and (max-height: 900px) {
    font-size: 4.5rem;
  }
  @media screen and (max-width: 390px) {
    font-size: 4rem;
  }
`;

export const cubeSurfaceVariants = {
  initial: {
    opacity: [null, 1, 1],
    backgroundColor: [null, "rgba(0,0,0,0)", "rgba(0,0,0,0)"],
    transition: {
      // when: "beforeChildren",
      ease: "easeInOut",
      duration: 4.5,
    },
  },
  pulse: {
    opacity: [null, 1, 1],
    backgroundColor: [null, "#C179B9", "rgba(0,0,0,0)"],
    transition: {
      when: "beforeChildren",
      ease: "easeInOut",
      duration: 4.5,
    },
  },
};

export default function Face({ children, state = false, togglePulse }) {
  let [animationState, setAnimationState] = useState("initial");
  useEffect(() => {
    // console.log(
    //   `Hello! Anim state change registerd in Face.jsx. animation: ${state}`
    // );
    // setAnimationState("pulse");
    // return () => {
    //   second;
    // };
  }, [state]);
  return (
    <FaceContent
      variants={cubeSurfaceVariants}
      animate={animationState ? animationState : false}
      onAnimationComplete={() => {
        setAnimationState("initial");
      }}
    >
      {children}
    </FaceContent>
  );
}
