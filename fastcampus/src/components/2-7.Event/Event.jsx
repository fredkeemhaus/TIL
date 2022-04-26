import React from "react";

const Event = () => {
  // 합성 이벤트: 인터페이스는 같지만 직접 대응되지 않는다.
  //
  // Bubble/Capture: Capture > target > Bubble
  //
  // return false: e.prevetDefault()를 해줘야 함
  const handleButtonClick = (e) => {
    console.dir(e);
    console.log("handleButtonClick");
  };
  const onMouseLeave = (e) => {
    console.dir(e);
  };
  const handleClickCapture = () => {
    console.log("handleClickCapture");
  };
  const handleClickCapture2 = () => {
    console.log("handleClickCapture2");
  };
  const handleClickBubble = () => {
    console.log("handleClickBubble");
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={onMouseLeave}>
          Button
        </button>
      </div>
    </div>
  );
};

export default Event;
