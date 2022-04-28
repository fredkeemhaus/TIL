import React from "react";
import PropsTypes from "prop-types";

const PropsComponent = (props) => {
  return <div>{props.name}</div>;
};

PropsComponent.defaultProps = {
  name: "fred",
  age: 7,
};

PropsComponent.propTypes = {
  name: PropsTypes.string,
  age: PropsTypes.number,
};

const Component = () => {
  return (
    <div>
      <PropsComponent />
    </div>
  );
};

export default Component;
