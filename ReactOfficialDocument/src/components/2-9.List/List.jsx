import React from "react";

// map: 배열의 개별 요소를 순회
// default key: 주지 않으면 react는 index를 쓴다. (warning 뜸)
// 고유성: 형제 사이에서만 고유하면 된다.
// key props: key는 props로 넘어가지 않는다.

const List = () => {
  //   const numbers = [1, 2, 3, 4, 5];
  //   return (
  //     <div>
  //       <ul>
  //         {numbers.map((item) => (
  //           <li key={item.toString()}>{item}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // };

  const todos = [
    { id: 1, text: "Drink Water" },
    { id: 2, text: "Wash Car" },
    { id: 3, text: "Listen Lecture" },
    { id: 4, text: "Go to bed" },
  ];

  const Item = (props) => {
    return <li>{props.text}</li>;
  };

  const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);

  return <>{todoList}</>;
};

export default List;
