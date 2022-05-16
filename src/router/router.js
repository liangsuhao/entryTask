import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from '../views/Home/Home';
import Explore from "../views/Explore/Explore";
import Library from "../views/Library/Library";
import Login from "../views/Login/Login";
import TopNav from "../components/TopNav/TopNav";
import User from "../views/User/User"

export default (
  <Routes>
    <Route index element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/user" element={<User />} >
      <Route index element={<Home />}/>
      <Route path="home" element={<Home />}/>
      <Route path="explore" element={< Explore/>}/>
      <Route path="library" element={< Library/>}/>
    </Route>
  </Routes>
);