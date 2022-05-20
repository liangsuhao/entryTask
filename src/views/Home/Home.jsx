import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';

import activityApi from '../../api/activity';
import style from "./home.module.css";

function Home() {

  const itemHeight = 90;
  const containerHeight = 600;
  const ContainerRef = useRef();
  const [activities,setActivities] = useState([]);
  const [startIndex,setStartIndex] = useState(0);
  const wraperHeight = useMemo(function() {
    return activities.length * itemHeight;
  }, [activities,itemHeight]);
  // 可视区域显示的最多条数
  const limit = useMemo(function() {
    return Math.floor(containerHeight/itemHeight);
  }, [startIndex]);

  //当前可视区域列表的结束索引
  const endIndex = useMemo(function() {
    return Math.min(startIndex+limit, activities.length-1)
  },[startIndex, limit,activities]);

  //滑动触发函数
  const scrollActivity = useCallback(function(event) {
    // if(event.target !== ContainerRef.current) return;
    //这里计算滑动距离，更改虚拟列表
    let scrollTop = event.target.scrollTop;  //滚动条上端距离顶部的距离
    let currentIndex = Math.floor(scrollTop/ itemHeight);
    if(currentIndex !== startIndex) {
      setStartIndex(currentIndex);
    }
    let windowHeight = event.target.clientHeight;   //可视区的高度
    let scrollHeight = event.target.scrollHeight;   //滚动条的总高度
    if(scrollTop + windowHeight >= scrollHeight) {
      getMoreActivities();
    }
  }, [ContainerRef, itemHeight, startIndex]);

  const getMoreActivities = (params) => {
    activityApi.getAllActivity(params).then((arr)=>{
      if(arr.data.flag) {
        setActivities(activities.concat(arr.data.data));
      }
    });
  };
  const nowList = useMemo(function() {
    return activities.slice(startIndex,endIndex+1);
  },[startIndex,endIndex]);

  const goToActivity = useCallback(function(e) {
    console.log(123);
  })

  useEffect(()=>{
    const fakeActivities = [
      {id:"1",title:'活动1',content:'我是活动1',tags:[{name:'123'},{name:'456'}],likeNum:1,writer:"name1"},
      {id:"2",title:'活动2',content:'我是活动2',tags:[{name:'789'},{name:'eee'}],likeNum:2,writer:"name2"},
      {id:"3",title:'活动3',content:'我是活动3',tags:[{name:'123'},{name:'456'}],likeNum:3,writer:"name3"},
      {id:"4",title:'活动4',content:'我是活动4',tags:[{name:'srf'},{name:'456'}],likeNum:4,writer:"name4"},
      {id:"5",title:'活动5',content:'我是活动5',tags:[{name:'wr'},{name:'7yf'}],likeNum:5,writer:"name5"},
      {id:"6",title:'活动6',content:'我是活动6',tags:[{name:'34'},{name:'777'}],likeNum:5,writer:"name6"},
      {id:"7",title:'活动7',content:'我是活动7',tags:[{name:'55'},{name:'658'}],likeNum:5,writer:"name7"},
      {id:"8",title:'活动8',content:'我是活动8',tags:[{name:'gh'},{name:'hy5'}],likeNum:5,writer:"name8"},
      {id:"9",title:'活动9',content:'我是活动9',tags:[{name:'mn'},{name:'6yh'}],likeNum:5,writer:"name9"},
      {id:"10",title:'活动10',content:'我是活动10',tags:[{name:'yu'},{name:'88j'}],likeNum:5,writer:"name10"},
    ];
    let params = {};
    getMoreActivities(params);
  },[])


  return (
    <div className={style.activityNav} ref={ContainerRef} style={{height:containerHeight+'px'}}>
      <div style={{height:"100%",overflow:"auto"}} onScroll={scrollActivity}><div className={style.fakeContainer} style={{height: wraperHeight + 'px'}}></div></div>
        {
          nowList.map((item,index)=>{
            return (
              <div key={item.title} className={style.activity} style={{height:'80px',top:(index*itemHeight)+'px'}} onClick={goToActivity}> 
                <div className={style.info}>
                  <div style={{"display":"flex","alignItems":"center"}}>
                    <img className={style.titleImg} alt='' href='' style={{"width":"15px","height":"15px"}} />
                    {item.writer}
                  </div>
                  <div className={style.tagNav}>
                    {
                      item.tags.map((ii,dd) => {
                        return (<div key={ii.name} className={style.activityTag}>{ii.name}</div>);
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