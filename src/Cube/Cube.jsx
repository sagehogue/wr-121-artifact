import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import FaceOne from "../Faces/FaceOne";

import FaceTwo from "../Faces/FaceTwo";

import FaceThree from "../Faces/FaceThree";

import FaceFour from "../Faces/FaceFour";

import FaceFive from "../Faces/FaceFive";

import FaceSix from "../Faces/FaceSix";

const cubeEdge = `8em`;

const duration = 5;

const animVars = {
  scale: 0.25,
};

// Shared rules
let Base = styled(motion.div)`
  position: absolute;

  transform-style: preserve-3d;
  // So faces (children) don't get squished onto its same plane
  // This is only necessary because I intend to populate the cube faces with content... if there were no nested divs it would only be needed in cube.
`;
//   vmin units are set relative to vh or vw, whichever is smaller
// rotateY(270deg) turns one way, rotateY(-90deg) turns the other way to the same side.
// Side1: rotateY(0deg);
// Side2: rotateY(270deg) | rotateY(-90deg);
// Side3: rotateY(180deg) | rotateY(-180deg);
// Side4: rotateY(90deg) | rotateY(-270deg);
// Side5: rotateY(0deg) rotateX(270deg) | rotateX(-90deg);
// Side6: rotateY(0deg) rotateX(90deg) | rotateX(-270deg);
export const variants = {
  zoomOut: { scale: [null, animVars.scale] },
  FaceOneFar: {
    rotateY: 0,
    scale: [null, animVars.scale],
    transition: {
      when: "beforeChildren",
      ease: "easeInOut",
      rotateY: {
        delay: duration,
        duration,
      },
    },
  },
  FaceOneClose: {
    rotateY: 0,
    scale: [null, 1],

    transition: {
      when: "beforeChildren",
      ease: "easeInOut",
      duration,
    },
  },
  FaceTwoClose: {
    rotateY: [null, null, -90, -90],
    scale: [null, animVars.scale, animVars.scale, 1],

    transition: {
      when: "beforeChildren",
      ease: "easeInOut",
      duration,
      // rotateY: {
      //   delay: duration,
      //   duration,
      // },
    },
  },
  FaceThreeClose: {
    rotateY: [null, -90, -180, -180],
    scale: [1, animVars.scale, animVars.scale, 1],

    transition: {
      // when: "beforeChildren",
      ease: "easeInOut",
      duration,
      rotateY: {
        duration,
      },
    },
  },
};

let CubeSpace = styled(Base)`
  top: 50%;
  left: 50%;
  // These two place the cube in the middle of the screen. Positioning with offset or margin is preferable for initial positioning, but transforms are used
  // for animating position changes in a more performant manner.

  font-size: 8.85vmin;

  /*${(props) => {
    switch (props.displayFace) {
      case 1:
        return `transform: rotateY(0deg);`;
      case 2:
        return `transform: rotateY(-90deg);`;
      case 3:
        return `transform: rotateY(-180deg);`;
      case 4:
        return `transform: rotateY(-270deg);`;

      case 5:
        return `transform: rotateY(-90deg);`;
      case 6:
        return `transform: rotateY(-90deg);`;
    }
  }}*/
  ${(props) => (props.displayFace ? ";" : ";")}
`;

// function createCSS

let Face = styled(Base)`
  margin: calc(-0.5 * ${cubeEdge});
  // Keeps it centered on screen
  width: ${cubeEdge};
  height: ${cubeEdge};
  // Dimensions of cube faces

  box-shadow: inset 0 0 0 2px;
  // Draw edges for visibility

  --i: 0;
  // default variables correspond to face 1, and are overridden for proceeding faces.

  &:nth-child(n + 5) {
    --i: 1;
  }
  // overriding i and j values for faces 5 & 6.

  ${() => {
    let styles = "";
    for (let i = 0; i < 6; i += 1) {
      styles += `
      &:nth-child(${i + 1}) { --m: ${i < 4 ? i : Math.pow(-1, i)} }
     `;
    }
    styles += `
  &:nth-child(n + 5) { --i: 1 }
  `;
    return css`
      ${styles}
    `;
  }}
  // determines m value for each face

    transform: rotate3d(var(--i), calc(1 - var(--i)), 0, calc(var(--m, 0)*90deg)) translateZ(calc(0.5 * ${cubeEdge}));
  // position of each cube face

  backface-visibility: hidden;
  //   This way I can't see the backs of each face!

  display: flex;
  align-content: flex-start;
`;

export default function Cube() {
  let test = variants.FaceTwoClose;
  const [animationState, setAnimationState] = useState(
    test ? test : variants.FaceOneClose
  );
  let [surfaceAnimationState, setSurfaceAnimationStater] = useState("display");
  // let toggleSurfaceAnim = () => {
  //   surfaceAnimationState === "display" ? "pulse" : "display";
  // };
  return (
    <CubeSpace variants={variants} animate={animationState}>
      <Face>
        <FaceOne
          cubeController={setAnimationState}
          cubeStates={variants}
          state={animationState}
        ></FaceOne>
      </Face>
      <Face>
        <FaceTwo
          cubeController={setAnimationState}
          cubeStates={variants}
          state={animationState}
          animationDuration={duration}
        ></FaceTwo>
        {/* <FaceContent>
          <Text>3</Text>
        </FaceContent> */}
      </Face>
      <Face>
        <FaceThree
          cubeController={setAnimationState}
          cubeStates={variants}
          state={animationState}
          animationDuration={duration}
        ></FaceThree>
      </Face>
      <Face>
        <FaceFour state={animationState}></FaceFour>
        {/* <FaceContent>
          <Text>4</Text>
        </FaceContent> */}
      </Face>
      <Face>
        <FaceFive state={animationState}></FaceFive>
        {/* <FaceContent>
          <Text>5</Text>
        </FaceContent> */}
      </Face>
      <Face>
        <FaceSix state={animationState}></FaceSix>
        {/* <FaceContent>
          <Text>6</Text>
        </FaceContent> */}
      </Face>
    </CubeSpace>
  );
}
