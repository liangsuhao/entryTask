import React, { useState } from "react"; 

import style from "./topNav.module.css"

function TopNav(props) {

  const [mainTitle,setMainTitle] = useState("BRAND");

  return (
    <div className={style.topNav}>
      <div className={style.topSearch}><svg width="20px" height="20px"><use xlinkHref="#icon-search" fill="currentColor"/></svg></div>
      <div className={style.title}>{mainTitle}</div>
      <div className={style.topUser}><svg width="20px" height="20px"><use xlinkHref="#icon-user" fill="currentColor"/></svg></div>
    </div>
  );
}

export default TopNav;