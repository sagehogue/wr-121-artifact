import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
const NextStyling = styled(motion.div)`
  cursor: pointer;
  opacity: ${(props) => (props.initialOpacity ? props.initialOpacity : 0)};
`;
export default function Next({ animation, callback, initialOpacity = 0 }) {
  return (
    <NextStyling
      initialOpacity={initialOpacity}
      animate={animation}
      onClick={callback}
    >
      {/* <IconContext.Provider value={{ color: "white", size: "1.25rem" }}> */}
      <FaArrowRight color="#fff" size="2.5rem" />
      {/* </IconContext.Provider> */}
    </NextStyling>
  );
}
