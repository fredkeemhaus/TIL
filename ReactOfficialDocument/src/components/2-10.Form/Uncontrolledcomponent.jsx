import React, { useRef } from "react";

const Uncontrolledcomponent = () => {
  const fileInputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected File - ${fileInputRef.current.files[0].name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInputRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Uncontrolledcomponent;
