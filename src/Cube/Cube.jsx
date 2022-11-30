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
      // Side1: rotateY(0deg);

      transform: rotateY(0deg);
    }
    16.6% {
      // Side4: rotateY(90deg);
      transform: rotateY(90deg);
    }
    33.3% {
      // Side3: rotateY(180deg);
      transform: rotateY(180deg);
    }
    50% {
      // Side2: rotateY(270deg);
      transform: rotateY(270deg);
    }
    66.6% {
      // Side6: rotateY(0deg) rotateX(90deg);
      transform: rotateY(0deg) rotateX(90deg);
    }
    83.3% {
      // Side5: rotateY(0deg) rotateX(270deg);
      transform: rotateY(0deg) rotateX(270deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  animation: animExample 10s ease-in-out infinite;
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

const FaceContent = styled.div`
  text-align: center;
  display: flex;
  align-content: center;
  margin: auto;
  background-color: rgba(166, 177, 225, 0.45);
  position: relative;
  width: 100%;
  height: 100%;
`;

const Text = styled.span`
  width: 100%;
  margin: auto;
`;

export default function Cube() {
  return (
    <CubeSpace>
      <Face>
        <FaceContent>
          <Text>1</Text>
        </FaceContent>
      </Face>
      <Face>
        <FaceContent>
          <Text>2</Text>
        </FaceContent>
      </Face>
      <Face>
        <FaceContent>
          <Text>3</Text>
        </FaceContent>
      </Face>
      <Face>
        <FaceContent>
          <Text>4</Text>
        </FaceContent>
      </Face>
      <Face>
        <FaceContent>
          <Text>5</Text>
        </FaceContent>
      </Face>
      <Face>
        <FaceContent>
          <Text>6</Text>
        </FaceContent>
      </Face>
    </CubeSpace>
  );
}
