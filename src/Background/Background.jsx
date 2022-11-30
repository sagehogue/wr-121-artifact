import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import topLeft from "./img/topleft.png";
import topRight from "./img/topright.png";
import bottomLeft from "./img/bottomleft.png";
import bottomRight from "./img/bottomright.png";

// Based on https://www.cssscript.com/starry-sky-background-effect/

const Freqs = {
  five: `5s`,
  six: `6.33s`,
  seven: `7s`,
  eight: `8.88s`,
  nine: `9s`,
  ten: `10.17s`,
};

const Delays = {
  two: "1.33s",
  four: "2.11s",
};

const alternateOpacity = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 0;
  }
`;

const Images = {
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Layer = styled.div`
  transition: all 0.2s;
  position: absolute;
  width: 150vw;
  height: 150vw;
  left: -50vw;
  top: -50vw;
  //   transform: translate(${(props) => [
    props.transform ? props.transform : "0",
  ]})
  transform-origin: center;
  z-index: -1000;
`;

const Tile = styled.div`
  background-image: url(${(props) => (props.Image ? props.Image : "")});
  overflow: hidden;
  position: absolute;
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  background-size: 512px 512px;
  animation-name: ${alternateOpacity};
  animation-iteration-count: infinite;
  animation-duration: ${(props) => props.freq};
  animation-delay: ${(props) => (props.delay ? props.delay : `0s`)};
`;

export default function Background({ children }) {
  const [mouseX, setMouseX] = useState(false);
  const [mouseY, setMouseY] = useState(false);
  //   const [layerOneTransform, setLayerOneTransform] = useState(false);
  //   const [layerTwoTransform, setLayerTwoTransform] = useState(false);
  //   const [layerThreeTransform, setLayerThreeTransform] = useState(false);
  const ratio = 0.05;

  let layerOne = useRef(0);
  let layerTwo = useRef(0);
  let layerThree = useRef(0);

  let webAnimMethod = () => {
    layerOne.current.animate([
      {
        transform: `translateX(${mouseX * ratio}px) translateY(${
          mouseY * ratio
        }px)`,
      },
      { duration: 250, iterations: 1 },
    ]);
    layerTwo.current.animate([
      {
        transform: `translateX(${(mouseX * ratio) / 2}px) translateY(${
          (mouseY * ratio) / 2
        }px) rotate(217deg)`,
      },
      { duration: 250, iterations: 1 },
    ]);
    layerThree.current.animate([
      {
        transform: `translateX(${(mouseX * ratio) / 3}px) translateY(${
          (mouseY * ratio) / 3
        }px) rotate(71deg)`,
      },
      { duration: 250, iterations: 1 },
    ]);
  };

  let reqAnimFrame = () => {
    "use strict";
    requestAnimationFrame(function animation() {
      layerOne.current.style.transform = `translateX(${
        mouseX * ratio
      }px) translateY(${mouseY * ratio}px)`;
      layerTwo.current.style.transform = `translateX(${
        (mouseX * ratio) / 2
      }px) translateY(${(mouseY * ratio) / 2}px) rotate(217deg)`;
      layerThree.current.style.transform = `translateX(${
        (mouseX * ratio) / 2
      }px) translateY(${(mouseY * ratio) / 2}px) rotate(217deg)`;
      requestAnimationFrame(animation);
    });
  };

  useEffect(() => {
    // maybe web animations api instead of state...
    console.log(layerOne.current.style.transform);
    // setLayerOneTransform(`${mouseX * ratio}px ${mouseY * ratio}px`);
    // setLayerTwoTransform(
    //   `${(mouseX * ratio) / 2}px ${(mouseY * ratio) / 2}px rotate(217deg)`
    // );
    // setLayerThreeTransform(
    //   `${(mouseX * ratio) / 3}px ${(mouseY * ratio) / 3}px rotate(71deg)`
    // );
    if (layerOne.current) {
    }
    // webAnimMethod()

    // = `translate: ${mouseX * ratio}px ${
    //   mouseY * ratio
    // }px`;
    reqAnimFrame();
  }, [mouseX, mouseY]);

  return (
    <Wrapper
      onMouseMove={(e) => {
        setMouseX(e.pageX);
        setMouseY(e.pageY);
      }}
    >
      {children}
      <Layer ref={layerOne}>
        <Tile Image={Images.topLeft} freq={Freqs.five}></Tile>
        <Tile Image={Images.topRight} freq={Freqs.nine}></Tile>
        <Tile Image={Images.bottomLeft} freq={Freqs.seven}></Tile>
        <Tile Image={Images.bottomRight} freq={Freqs.ten}></Tile>
      </Layer>
      <Layer ref={layerTwo}>
        <Tile
          Image={Images.topLeft}
          freq={Freqs.nine}
          delay={Delays.two}
        ></Tile>
        <Tile
          Image={Images.topRight}
          freq={Freqs.five}
          delay={Delays.two}
        ></Tile>
        <Tile
          Image={Images.bottomLeft}
          freq={Freqs.six}
          delay={Delays.four}
        ></Tile>
        <Tile
          Image={Images.bottomRight}
          freq={Freqs.ten}
          delay={Delays.four}
        ></Tile>
      </Layer>
      <Layer ref={layerThree}>
        <Tile
          Image={Images.topLeft}
          freq={Freqs.seven}
          delay={Delays.two}
        ></Tile>
        <Tile
          Image={Images.topRight}
          freq={Freqs.five}
          delay={Delays.four}
        ></Tile>
        <Tile
          Image={Images.bottomLeft}
          freq={Freqs.nine}
          delay={Delays.two}
        ></Tile>
        <Tile
          Image={Images.bottomRight}
          freq={Freqs.five}
          delay={Delays.four}
        ></Tile>
      </Layer>
    </Wrapper>
  );
}
