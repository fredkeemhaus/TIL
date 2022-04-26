import React from "react";
import Dialog from "./Dialog";

const Thankyoudialog = () => {
  return (
    <Dialog
      title={<button style={{ color: "purple" }}>Thanks</button>}
      description="It is honor to meet you"
      button={
        <button style={{ backgroundColor: "blue", color: "white" }}>
          Close
        </button>
      }
    />
  );
};

export default Thankyoudialog;
