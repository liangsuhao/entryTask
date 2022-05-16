import React, { useState, useRef } from 'react';
import {
  Routes,
  Route,
  Outlet
} from "react-router-dom";
// import { userRouter } from "../../router/router";

import TopNav from "../../components/TopNav/TopNav";
import Home from '../../views/Home/Home';
import Explore from "../../views/Explore/Explore";
import Library from "../../views/Library/Library";

function App() {
  return (
      <div className="User">
        <TopNav></TopNav>
        {/* { userRouter } */}
        {/* <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/user/home" element={<Home />}/>
          <Route path="/user/explore" element={< Explore/>}/>
          <Route path="/library" element={< Library/>}/>
        </Routes> */}
        <Outlet />
      </div>
  
  );
}

export default App;
