import React from "react";
import Customdialog from "./CustomDialog";
import Dialog from "./Dialog";

const Welcomedialog = () => {
  //   return (
  //     <Dialog>
  //       <h1>Welcome</h1>
  //       <h5>Thank you</h5>
  //     </Dialog>
  //   );
  return (
    <Customdialog title={<button>Welcome</button>} description="Description" />
  );
};

export default Welcomedialog;
