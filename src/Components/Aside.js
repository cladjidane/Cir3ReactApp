import Prof2 from "./Prof2";
import React from "react";



const Aside = ({ text }) => {
  const user = React.useContext(Context);
  
  <aside className="aside">
    <Prof2 nom={user.name} />
  </aside>
};

export default Aside;
