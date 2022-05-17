import React, { useState, useRef, useEffect } from 'react';

import activityApi from '../../api/activity';
import style from "./home.module.css";

function Home() {

  const [activities,setActivities] = useState([]);

  useEffect(()=>{
    const fakeActivities = [
      {id:"1",title:'活动1',content:'我是活动1',tags:[{name:'123'},{name:'456'}],likeNum:1,writer:"name1"},
      {id:"2",title:'活动2',content:'我是活动2',tags:[{name:'789'},{name:'eee'}],likeNum:2,writer:"name2"},
      {id:"3",title:'活动3',content:'我是活动3',tags:[{name:'123'},{name:'456'}],likeNum:3,writer:"name3"},
      {id:"4",title:'活动4',content:'我是活动4',tags:[{name:'srf'},{name:'456'}],likeNum:4,writer:"name4"},
      {id:"5",title:'活动5',content:'我是活动5',tags:[{name:'wr'},{name:'7yf'}],likeNum:5,writer:"name5"}
    ];
    let params = {};
    activityApi.getAllActivity(params).then((arr)=>{
      console.log(arr);
      if(arr.data.flag) {
        setActivities(arr.data);
      }
    });
  },[])

  return (
    <div>
      {
        activities.map((item,index)=>{
          return (
            <div className={style.activity}> 
              <div className={style.info}>
                <div style={{"display":"flex","alignItems":"center"}}>
                  <img className={style.titleImg} alt='' href='' style={{"width":"15px","height":"15px"}} />
                  {item.writer}
                </div>
                <div className={style.tagNav}>
                  {
                    item.tags.map((ii,dd) => {
                      return (<div className={style.activityTag}>{ii.name}</div>);
                    })
                  }
                </div>
              </div>
              <div className={style.title}>{item.title}</div>
              <div className={style.time}>{item.time}</div>
              <div className={style.content}>{item.content}</div>
            </div>
          )
        })
      }
    </div> 
  )
}
export default Home;