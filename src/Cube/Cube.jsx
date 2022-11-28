import React from "react";
import styled, { css } from "styled-components";

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

  font-size: 8vmin;
  //   vmin units are set relative to vh or vw, whichever is smaller

  @keyframes animExample {
    0% {
      transform: rotateY(0deg);
    }
    16.6% {
      transform: rotateY(90deg);
    }
    33.3% {
      transform: rotateY(180deg);
    }
    50% {
      transform: rotateY(270deg);
    }
    66.6% {
      transform: rotateY(0deg) rotateX(90deg);
    }
    83.3% {
      transform: rotateY(0deg) rotateX(270deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  //   animation: animExample 30s ease-in-out infinite;
  //   keyframe animation
`;

// function createCSS

let Face = styled(Base)`
    margin: calc(-0.5 * ${cubeEdge});
    width: ${cubeEdge};
    height: ${cubeEdge};
    // Dimensions of cube faces

    box-shadow: inset 0 0 0 2px;
    // Draw edges for visibility

    --i: 0;
    // default variables correspond to face 1, and are overridden for proceeding faces.


    // rotate3d(var(--i), calc(1 - var(--i)), 0, calc(var(--m, 0)*90deg)) translateZ(4em)
    // Example transform

    
    

    &:nth-child(n + 5) { --i: 1 }
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



  

//   Another verbose version
/*
   &:nth-child(n + 5) { --i: 1; --j: 0 }
  &:nth-child(2) { --m:  1 }
  &:nth-child(3) { --m:  2 }
  &:nth-child(4) { --m:  3 }
  &:nth-child(5) { --m:  1 /*  1 = pow(-1, 4) */ }
  &:nth-child(6) { --m: -1 /* -1 = pow(-1, 5) */ }
*/

//   Verbose version
  /*
  &:nth-child(1) {
    background-color: blue;
    transform: rotate3d(0 /* i */, 1 /* j */, 0 /* k */, 0deg /*  0*90° */)
      translateZ(0.5 * ${cubeEdge});
  }
  &:nth-child(2) {
    background-color: red;
    transform: rotate3d(0 /* i */, 1 /* j */, 0 /* k */, 90deg /*  1*90° */)
      translateZ(0.5 * ${cubeEdge});
  }
  &:nth-child(3) {
    background-color: green;
    transform: rotate3d(0 /* i */, 1 /* j */, 0 /* k */, 180deg /*  2*90° */)
      translateZ(0.5 * ${cubeEdge});
  }
  &:nth-child(4) {
    background-color: orange;
    transform: rotate3d(0 /* i */, 1 /* j */, 0 /* k */, 270deg /*  3*90° */)
      translateZ(0.5 * ${cubeEdge});
  }
  &:nth-child(5) {
    background-color: yellow;
    transform: rotate3d(1 /* i */, 0 /* j */, 0 /* k */, 90deg /*  1*90° */)
      translateZ(0.5 * ${cubeEdge});
  }
  &:nth-child(6) {
    background-color: purple;
    transform: rotate3d(1 /* i */, 0 /* j */, 0 /* k */, -90deg /* -1*90° */)
      translateZ(0.5 * ${cubeEdge});
  } */
`;

export default function Cube() {
  return (
    <CubeSpace>
      <Face />
      <Face />
      <Face />
      <Face />
      <Face />
      <Face />
    </CubeSpace>
  );
}
