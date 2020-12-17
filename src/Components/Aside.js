import Prof2 from "./Prof2";
import FetchWithEffect from "./FetchWithEffect";
import React, { useContext, createContext } from "react";




const Aside = ({ text }) => {
  //const user = React.useContext(Context);
  
  return (<aside className="aside">
    <FetchWithEffect />
  </aside>)
};

export default Aside;
