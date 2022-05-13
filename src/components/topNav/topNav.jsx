import React from "react"; 

import style from "./topNav.module.css"

export default function topNav(props) {

  return (
    <div className={style.topNav}>
      <div className={style.topSearch}><svg><use xlinkHref="#icon-search" fill="currentColor"/></svg></div>
      <div className={style.title}></div>
    </div>
  );
}