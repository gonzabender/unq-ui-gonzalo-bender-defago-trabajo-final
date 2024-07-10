import { useEffect, useState } from "react";
import "./App.css";
import Api from "./Api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./containers/home/home";
import Question from "./containers/question/question";
import Results from "./containers/results/results.jsx";

function App() {
  
  return (
     <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
          <Route path="/question/:difficulty" element={<Question/>} />
          <Route path="/results" element={<Results/>} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
