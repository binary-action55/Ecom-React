import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderHeading from "./HeaderHeading";

function Header(props) {
  return (
    <div className="Header">
    <HeaderNav path={props.path}></HeaderNav>
    <HeaderHeading></HeaderHeading>
    </div>
  );
}

export default Header;
