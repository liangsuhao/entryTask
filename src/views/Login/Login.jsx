import React, { useState, useRef } from 'react';


import style from "./Login.module.css"
import login from "../../api/login"

function Login(props) {

  const [userId,setUserId] = useState("");
  const [password,setPassWord] = useState("");
  const [token,setToken] = useState(props.token);

  const signIn = () => {
    if(!userId || !password) {
      alert("用户名或密码缺失");
      return;
    }
    console.log(123)
    login.loginin({account:userId,checkPass:password}).then((arr)=>{
      console.log(arr);
    })
  }

  return (
    <div className={style.login}>
      <div className={style.Avatar}>
        <img className={style.AvatarImg} src='' alt='' />
      </div>
      <div className={style.info}>
        <form className={style.infoForm}>
          <div className={style.container}>
            <svg className={style.icon} width="20px" height="20px"><use xlinkHref="#icon-user" fill="currentColor"/></svg>
            <input className={style.userId} name="userId" placeholder="Email" onChange={e=>setUserId(e.target.value)}/>
          </div>
          <div className={style.container}>
            <svg className={style.icon} width="20px" height="20px"><use xlinkHref="#icon-key" fill="currentColor"/></svg>
            <input className={style.password} name="password" placeholder="Password" onChange={e=>setPassWord(e.target.value)}/>
          </div>
        </form>
      </div>
      <div className={style.loginButton}>
        <button className={style.theButton} onClick={signIn}>Sign in</button>
      </div>
    </div> 
  )
}
export default Login;