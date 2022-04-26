import React, { useEffect, useState } from "react";
import Comments from "./Comments";

const commnetList = [
  { title: "comment1", content: "message1", likes: 1 },
  { title: "comment2", content: "message2", likes: 1 },
  { title: "comment3", content: "message3", likes: 1 },
];

const Memo = () => {
  const [comments, setComments] = useState(commnetList);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments) => [
        ...prevComments,
        {
          title: `comment${prevComments.length + 1}`,
          content: `message${prevComments.length + 1}`,
          likes: 1,
        },
      ]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <Comments commentList={comments} />;
};

export default Memo;
