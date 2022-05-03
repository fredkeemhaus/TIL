import React from "react";
import { useRecoilState } from "recoil";
import { fontSizeState } from "./store";

const Text = () => {
  const [fontSize] = useRecoilState(fontSizeState);
  return <p style={{ fontSize }}>This text will increase in state too.</p>;
};

export default Text;
