import axios from "axios";
import React from "react";
import {
  atom,
  selector,
  selectorFamily,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import ErrorBoundary from "./ErrorBoundary";

const currentUserIDState = atom({
  key: "CurrentUserID",
  default: 1,
});

const tableOfUsers = [{ name: "fred" }, { name: "daisy" }];

// const currentUserNameState = selector({
//   key: "CurrentUserName",
//   get: ({ get }) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });

const currentUserNameQuery = selectorFamily({
  key: "CurrentUserName",
  get: (id) => async () => {
    const response = await axios.get(`/api/user-name?id=${id}`);

    return response.data.name;
  },
});

const CurrentUser = () => {
  //   const userName = useRecoilValue(currentUserNameQuery(1));
  //   return <div>{userName}</div>;
  const userName = useRecoilValueLoadable(currentUserNameQuery(1));
  if (userName.state === "loading") {
    return <div>Loading...</div>;
  }

  if (userName.state === "hasError") {
    return <div>soemthing wrong...</div>;
  }
  return <div>{userName.contents}</div>;
};

const CurrentUserInfo = () => {
  return (
    // <ErrorBoundary>
    //   <React.Suspense fallback={<div>Loadiing...</div>}>
    <CurrentUser />
    //   </React.Suspense>
    // </ErrorBoundary>
  );
};

export default CurrentUserInfo;
