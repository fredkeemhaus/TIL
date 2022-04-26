import React, { useEffect, useState } from "react";

const Functionalcomponent = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return (
    <div>
      <h1>Hello, world! It's Functional</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default Functionalcomponent;
