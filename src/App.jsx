import { useEffect, useState } from "react";
import "./App.css";
import Api from "./Api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./containers/home/home";
import Question from "./containers/question/question";

function App() {
  
  return (
     <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
          <Route path="/question/:difficulty" element={<Question/>} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
