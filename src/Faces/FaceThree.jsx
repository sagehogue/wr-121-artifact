import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Textillate } from "textillate-react";
import { GrCaretNext } from "react-icons/gr";

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
  return state === variants.FaceThreeClose ? (
    <Face>
      <AnimatedHeadline delay={animationDuration}>Cost of War</AnimatedHeadline>
    </Face>
  ) : null;
}
