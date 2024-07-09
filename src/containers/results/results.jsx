import { useEffect, useState } from "react";
import Api from "../../Api";
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
      <div className="container results">
        <b>You completed the game!</b>
        <b>You answered {correct}/10 questions right! </b>
        <button onClick={() => reset()}>Go back</button>
      </div>
    </>
  );
}
