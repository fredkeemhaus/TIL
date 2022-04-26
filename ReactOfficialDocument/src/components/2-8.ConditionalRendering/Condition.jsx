import React from "react";

const UserGreeting = (props) => {
  return (
    <h1>
      {props.name && props.name + ","} Welcome{" "}
      {/* 0은 falsy 하기 때문에 아래와 같이 2가지 방법으로 설정할 수 있다. */}
      {Boolean(props.count) && `It's ${props.count} times`}
      {/* {props.count ? `It's ${props.count} times` : null} */}
    </h1>
  );
};
const GuestGreeting = (props) => {
  return <h1>Please sign up</h1>;
};

const Greeting = (props) => {
  return props.isLoggedIn ? (
    <UserGreeting name="fred" count={0} />
  ) : (
    <GuestGreeting />
  );
};

const Condition = () => {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Condition;
