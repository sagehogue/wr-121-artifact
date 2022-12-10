import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Textillate } from "textillate-react";
import Next from "./Next/Next";
import Face, { AnimatedText, AnimatedHeadline } from "./Face.jsx";

// ANIMATION FUCKED GOING FROM FACE 2 TO 3

export default function FaceTwo({
  cubeController,
  cubeStates,
  animationDuration,
  state,
  setCubeFaceAnimState,
}) {
  let [animationCount, setAnimationCount] = useState(0);
  let [content, setContent] = useState([]);

  const IncrementAnimState = () => {
    setAnimationCount(animationCount + 1);
    console.log(`Face2 anim state incremented: ${animationCount}`);
  };

  useEffect(() => {
    let newContent = () => {
      console.log("Getting next content");
      let initialContent = [
        <AnimatedHeadline
          delay={animationDuration}
          callback={() => {
            IncrementAnimState();
          }}
        >
          Buildup & Outbreak
        </AnimatedHeadline>,
      ];
      switch (animationCount) {
        case 0:
          console.log(`Animation count: ${animationCount}`);
          return initialContent;
        case 1:
          console.log(`Animation count: ${animationCount}`);
          return (
            <AnimatedText
              callback={() => {
                IncrementAnimState();
              }}
            >
              In March 2020, the federal government announced a suspension of
              elections due to COVID-19. The TPLF rejected this suspension and
              in September held independent elections within Tigray. The TPLF
              rejected the election suspension and in September 2020 held
              independent elections within Tigray. The Ethiopian government
              labels the Tigrayan election as illegal and halt funding to
              Tigray. The TPLF decries this as "tantamount to an act of war."
            </AnimatedText>
          );
        case 2:
          return (
            <>
              <AnimatedText callback={IncrementAnimState}>
                Things begin to move fast. The Ethiopian federal government
                strikes a pact with Eritrean president Isaias Afwerki to crush
                the TPLF and begins moving Ethiopian elite military units into
                Eritrea to flank the Tigray region.
              </AnimatedText>
              <br />
            </>
          );
        case 3:
          return (
            <AnimatedText callback={IncrementAnimState}>
              November 3rd, 2020. TPLF special forces and militia units attack
              the Ethiopian National Defense Force (ENDF) northern headquarters,
              located in the Tigrayan regional capital of Mekelle. Other ENDF
              bases in Tigray are attacked as well. The TPLF later defends this
              as "pre-emptive self-defense."
            </AnimatedText>
          );
        case 4:
          return (
            <AnimatedText callback={IncrementAnimState}>
              The next day, Prime Minister Abiy Ahmed orders military action
              against the TPLF in response to their attacks. ENDF forces launch
              an assault on Tigray from the South while Eritrean Defence Forces
              (EDF) invade Tigray from the North.
            </AnimatedText>
          );
        case 5:
          return (
            <Next
              animation={{ opacity: [0, 1] }}
              callback={() => {
                cubeController(cubeStates.FaceThreeClose);
              }}
            >
              {/* <Text>&gt;</Text> */}
            </Next>
          );
      }
    };
    let newArray = [...content, newContent()];
    console.log(
      `useEffect triggered! Animation count: ${animationCount} content:${content} newContent: ${newArray}`
    );
    setContent(newArray);
  }, [animationCount]);

  return (
    <Face>
      {state == cubeStates.FaceTwoClose || animationCount >= 1 ? content : null}
      {/* {animationCount >= 1 ? (
        <AnimatedText callback={IncrementAnimState}>
          In March 2020, the federal government announced a suspension of
          elections due to COVID-19. The TPLF rejected this suspension and in
          September held independent elections within Tigray. The TPLF rejected
          the election suspension and in September 2020 held independent
          elections within Tigray. The Ethiopian government labels the Tigrayan
          election as illegal and halt funding to Tigray. The TPLF decries this
          as "tantamount to an act of war."
        </AnimatedText>
      ) : null} */}

      {/* {animationCount >= 2 ? (
        <AnimatedText callback={IncrementAnimState}>
          Things begin to move fast. The Ethiopian federal government strikes a
          pact with Eritrean president Isaias Afwerki to crush the TPLF and
          begins moving Ethiopian elite military units into Eritrea to flank the
          Tigray region.
        </AnimatedText>
      ) : null}
      <br /> */}

      {/* {animationCount >= 3 ? (
        <AnimatedText callback={IncrementAnimState}>
          November 3rd, 2020. TPLF special forces and militia units attack the
          Ethiopian National Defense Force (ENDF) northern headquarters, located
          in the Tigrayan regional capital of Mekelle. Other ENDF bases in
          Tigray are attacked as well. The TPLF later defends this as
          "pre-emptive self-defense."
        </AnimatedText>
      ) : null} */}
      {
        /* {animationCount >= 4 ? (
        <AnimatedText callback={IncrementAnimState}>
          The next day, Prime Minister Abiy Ahmed orders military action against
          the TPLF in response to their attacks. ENDF forces launch an assault
          on Tigray from the South while Eritrean Defence Forces (EDF) invade
          Tigray from the North.
        </AnimatedText>
      ) : null} */
        // {animationCount >= 5 ? (
        //   <Next
        //     animation={{ opacity: [0, 1] }}
        //     callback={() => {
        //       cubeController(cubeStates.FaceThreeClose);
        //     }}
        //   >
        //     {/* <Text>&gt;</Text> */}
        //   </Next>
        // ) : null}
      }
    </Face>
  );
}
