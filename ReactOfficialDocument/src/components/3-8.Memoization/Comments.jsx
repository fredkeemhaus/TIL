import React, { useCallback } from "react";
import Commentitem from "./CommentItem";

const Comments = ({ commentList }) => {
  // 특정 함수를 메모이제이션할 때는 useCallback을 사용한다.
  const handleClick = useCallback(() => {
    console.log("눌림");
  }, []);
  return (
    <div>
      {commentList?.map((comment) => (
        <Commentitem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Comments;
