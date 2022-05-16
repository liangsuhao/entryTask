import React, { useState, useRef } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import router from "./router/router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        { router }
      </BrowserRouter>
    </div>
  );
}

export default App;
