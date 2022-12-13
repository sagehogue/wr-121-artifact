import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Textillate } from "textillate-react";
import { GrCaretNext } from "react-icons/gr";
import Next from "./Next/Next";
import { variants } from "../Cube/Cube";
import Face, {
  Text,
  Headline,
  AnimatedText,
  AnimatedHeadline,
} from "./Face.jsx";

import { motion } from "framer-motion";

export default function FaceThree({
  cubeController,
  cubeStates,
  state,
  animationDuration,
}) {
  let [animCount, setAnimCount] = useState(0);
  return state === variants.FaceThreeClose || animCount >= 1 ? (
    <Face>
      <AnimatedHeadline
        delay={animationDuration}
        callback={() => setAnimCount(animCount + 1)}
      >
        Cost of War
      </AnimatedHeadline>
      {animCount >= 1 ? (
        <AnimatedText callback={() => setAnimCount(animCount + 1)}>
          The war immediately becomes extremely gruesome, as massacres, mass
          executions, and sadistic acts of sexual violence become commonplace
          within conflicted regions. The ENDF instituted a media blackout
          diuring the war and used famine as a weapon against the people of
          Tigray, denying aid workers entry to Tigray and even murdering them.
        </AnimatedText>
      ) : null}
      {animCount >= 2 ? (
        <AnimatedText callback={() => setAnimCount(animCount + 1)}>
          By February 2021 1 in 7 Tigrayan children are severely malnourished
          and only 31 of Tigray’s 260 health centers are fully functional. All
          sides of the conflcit have been accused of stealing resources intended
          for humanitarian aid and distribution.
        </AnimatedText>
      ) : null}
      {animCount >= 3 ? (
        <AnimatedText callback={() => setAnimCount(animCount + 1)}>
          The war’s death toll is estimated at 385,000-800,000 dead.
        </AnimatedText>
      ) : null}
      {animCount >= 4 ? (
        <Next
          animation={{ opacity: [0, 1] }}
          callback={() => {
            cubeController(cubeStates.FaceFourClose);
          }}
        >
          {/* <Text>&gt;</Text> */}
        </Next>
      ) : null}
      ;
    </Face>
  ) : null;
}
