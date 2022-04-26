// import React, { Component } from "react";
// import { ThemeContext } from "./ThemeContext";

// class Themedbutton extends Component {
//   render() {
//     let props = this.props;
//     let theme = this.context;
//     return (
// <button
//   {...props}
//   onClick={props.changeTheme}
//   style={{ backgroundColor: theme.background, color: theme.foreground }}
// >
//   Button
// </button>
//     );
//   }
// }

// Themedbutton.contextType = ThemeContext;

// export default Themedbutton;

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Themedbutton = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <button
      {...props}
      onClick={props.changeTheme}
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      Button
    </button>
  );
};

export default Themedbutton;
