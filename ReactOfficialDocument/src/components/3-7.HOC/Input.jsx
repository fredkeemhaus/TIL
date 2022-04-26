import React from "react";
import withLoading from "./withLoading";

const Input = () => {
  return <input defaultValue="input" />;
};

export default withLoading(Input);
