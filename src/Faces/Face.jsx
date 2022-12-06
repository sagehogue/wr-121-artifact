import React from "react";
import styled from "styled-components";

let colors = {
  blocktext: `#fff`,
  headline: `#fff`,
};

let fonts = {
  body: `"BIZ UDPMincho", serif`,
  headline: `'Big Shoulders Stencil Display', cursive`,
};

const FaceContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: auto;
  //   background-color: rgba(166, 177, 225, 0.45);
  background-color: transparent;
  font-size: 0.85rem;

  position: relative;
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  color: ${colors.blocktext};
  padding: 1rem;
  font-family: ${fonts.body};
  line-height: 1.1rem;
  margin: 0.25rem;
`;

export const Headline = styled.h1`
  color: ${colors.headline};
  font-family: ${fonts.headline};
  font-size: 5rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export default function Face({ children }) {
  return <FaceContent>{children}</FaceContent>;
}
