import { useEffect, useState } from "react";
import Api from "../../Api";
import "./results.css"
import { useNavigate, useParams } from "react-router-dom";

export default function Results() {
  const navigate = useNavigate();
  const [correct, setCorrect] = useState(0)

  useEffect(() => {
    setCorrect(localStorage.getItem("counter"))
    localStorage.setItem("counter", 0)
    }, [])
  
    const reset = () => {
      localStorage.removeItem("counter")
      navigate("/")
    }
  return (
    <>
      <div className="results">
        <div className="result-text">
        <b>You completed the game!</b>
        <b>You answered {correct}/10 questions right!</b>
        
        </div>
        <button className="go-back" onClick={() => reset()}>Go back</button>
      </div>
    </>
  );
}
