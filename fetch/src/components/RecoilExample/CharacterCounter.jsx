import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { charCountState, textState } from "./CounterStore";

const Charactercounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};

const TextInput = () => {
  const [text, setText] = useRecoilState(textState); // setter도 꺼낼 수 있다 하지만, recoil store에서 selector로도 처리할 수 있다.

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

const CharacterCount = () => {
  const count = useRecoilValue(charCountState); // Recoil Value는 value값만 꺼낼 수 있다.

  return <>Character Count: {count}</>;
};

export default Charactercounter;
