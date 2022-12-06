import React from "react";
import styled, { css } from "styled-components";

import FaceOne from "../Faces/FaceOne";

import FaceTwo from "../Faces/FaceTwo";

import FaceThree from "../Faces/FaceThree";

import FaceFour from "../Faces/FaceFour";

import FaceFive from "../Faces/FaceFive";

import FaceSix from "../Faces/FaceSix";

const cubeEdge = `8em`;

// Shared rules
let Base = styled.div`
  position: absolute;

  transform-style: preserve-3d;
  // So faces (children) don't get squished onto its same plane
  // This is only necessary because I intend to populate the cube faces with content... if there were no nested divs it would only be needed in cube.
`;

let CubeSpace = styled(Base)`
  top: 50%;
  left: 50%;
  // These two place the cube in the middle of the screen. Positioning with offset or margin is preferable for initial positioning, but transforms are used
  // for animating position changes in a more performant manner.

  font-size: 8.85vmin;

  //   vmin units are set relative to vh or vw, whichever is smaller
  // rotateY(270deg) turns one way, rotateY(-90deg) turns the other way to the same side.
  // Side1: rotateY(0deg);
  // Side2: rotateY(270deg) | rotateY(-90deg);
  // Side3: rotateY(180deg) | rotateY(-180deg);
  // Side4: rotateY(90deg) | rotateY(-270deg);
  // Side5: rotateY(0deg) rotateX(270deg) | rotateX(-90deg);
  // Side6: rotateY(0deg) rotateX(90deg) | rotateX(-270deg);
  @keyframes animExample {
    // Thoughts: Perhaps I should do a 3 part anim for each side turn. 1 zoom out 2 rotate 3 zoom in

    0% {
      transform: rotateY(0deg);
    }
    8.3% {
      transform: scale3d(0.75, 0.75, 0.75);
    }
    16.6% {
      transform: rotateY(-90deg);
    }

    24.9% {
      transform: rotateY(-90deg) scale3d(0.75, 0.75, 0.75);
    }

    33.3% {
      transform: rotateY(-180deg);
    }
    50% {
      transform: rotateY(-270deg);
    }
    66.6% {
      transform: rotateX(-90deg);
    }
    83.3% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  // animation: animExample 10s ease-in-out infinite;
  //   keyframe animation
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
`;

const Text = styled.span`
  width: 100%;
  margin: auto;
`;

export default function Cube() {
  return (
    <CubeSpace>
      <Face>
        <FaceOne></FaceOne>
      </Face>
      <Face>
        <FaceTwo></FaceTwo>
        {/* <FaceContent>
          <Text>3</Text>
        </FaceContent> */}
      </Face>
      <Face>
        <FaceThree></FaceThree>
      </Face>
      <Face>
        <FaceFour></FaceFour>
        {/* <FaceContent>
          <Text>4</Text>
        </FaceContent> */}
      </Face>
      <Face>
        <FaceFive></FaceFive>
        {/* <FaceContent>
          <Text>5</Text>
        </FaceContent> */}
      </Face>
      <Face>
        <FaceSix></FaceSix>
        {/* <FaceContent>
          <Text>6</Text>
        </FaceContent> */}
      </Face>
    </CubeSpace>
  );
}
