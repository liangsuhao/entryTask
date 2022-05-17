import React, { useState } from 'react';

import { saveToken } from '../../actions';
import style from "./Login.module.css";
import login from "../../api/login";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const { token, dispatch } = props;
  const [userId,setUserId] = useState("");
  const [password,setPassWord] = useState("");
  let navigate = useNavigate();

  const signIn = () => {
    if(!userId || !password) {
      alert("用户名或密码缺失");
      return;
    }
    login.loginin({account:userId,checkPass:password,username:userId,password:password}).then((arr)=>{
      dispatch(saveToken(arr.data.token));
      navigate("/user/home");
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
export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return {dispatch};
  }
)(Login);