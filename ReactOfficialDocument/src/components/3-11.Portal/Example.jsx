import React from "react";
import { createPortal } from "react-dom";
import Thankyoudialog from "./ThankyouDialog";

const Portal = (props) => {
  return createPortal(props.children, document.getElementById("portal"));
};

const Example = () => {
  return (
    <div onClick={() => console.log("div")}>
      <Portal>
        <Thankyoudialog />
      </Portal>
      <div style={{ position: "absolute" }}>
        <button>하하하</button>
      </div>
    </div>
  );
};

export default Example;
