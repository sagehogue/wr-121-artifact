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

export default function FaceFour({
  cubeController,
  cubeStates,
  state,
  animationDuration,
}) {
  let [animCount, setAnimCount] = useState(0);
  return (
    <Face>
      {animCount >= 1 || state === cubeStates.FaceFourClose ? (
        <AnimatedHeadline
          delay={animationDuration}
          callback={() => setAnimCount(animCount + 1)}
        >
          Current Situation
        </AnimatedHeadline>
      ) : null}

      {animCount || animCount >= 1 ? (
        <AnimatedText callback={() => setAnimCount(animCount + 1)}>
          On November 3rd, 2022, two years after the war began, an uneasy truce
          was negotiated between the TPLF and ENDF. On November 12th and
          agreement was struck between the two parties for allow the deliverance
          of aid to civilians. Eritrea had no presence in the negotiations and
          appears to continue pursuit of its violent grudge against Tigray, with
          reports of looting, arrests, forcible relocations, and murders of
          Tigrayans in regions claimed by Eritrea unabated.
        </AnimatedText>
      ) : null}
      {animCount >= 2 ? (
        <AnimatedText callback={() => setAnimCount(animCount + 1)}>
          An estimated 9 million people in Ethiopia need food aid, and nearly
          40% of people in Tigray are suffering from extreme lack of food. 3.5
          million people have been internally displaced within Ethiopia.
          Estimates of the death toll commonly range from 400,000 to 800,000 but
          due to media blackout and the murder of journalists it is very
          difficult to accurately determine the true extent of the war’s impact.
        </AnimatedText>
      ) : null}
      {animCount >= 3 ? (
        <Next
          animation={{ opacity: [0, 1] }}
          callback={() => {
            cubeController(cubeStates.FaceFiveClose);
          }}
        >
          {/* <Text>&gt;</Text> */}
        </Next>
      ) : null}
    </Face>
  );
}
