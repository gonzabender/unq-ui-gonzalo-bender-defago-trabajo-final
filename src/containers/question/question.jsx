import { useEffect, useState } from "react";
import "./question.css"
import Api from "../../Api";
import { useNavigate, useParams } from "react-router-dom";

function Question() {
  const [preguntas, setPreguntas] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [correct, setCorrect] = useState("");
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [right, setRight] = useState(0);

  const params = useParams();
  
  useEffect(() => {
    getAQuestion();
    
  }, [params]);

  useEffect(() => {
    setCorrect("");
    localStorage.setItem("counter",right)
  }, [current]);

  async function getAQuestion() {
    try {
      const response = await Api.questionByDifficulty(`${params.difficulty}`);
      setPreguntas(response);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  }

  const sendAnswer = (questionId, option) => {
    Api.answerQuestion(questionId, option)
      .then((response) => handleResponse(response.data, option))
      .catch((response) => "Error" + response);
  };

  const handleResponse = (response, option) => {
    response.answer
      ? (setCorrect(option),
        setTimeout(() => {
          setCompleted(!completed);
          setRight(right + 1)
          setCurrent((current) => current + 1);
        }, 0))
      : setCurrent((current) => current + 1);
  };

  const reset = () => {
    localStorage.removeItem("counter")
    navigate("/")
  }
  return (
    <>{ current < 10 ?
      <div className="container-question">
        <p className="title">{preguntas.length > 0 ? preguntas[current].question : "Loading"}</p>
        <p>{"Difficulty: "} {`${params.difficulty}`}</p>
        <div className="preguntas">
          <button  style={"option1" == correct ? { background: "green" } : {}}
            onClick={() => {
              sendAnswer(`${preguntas[current].id}`, `option1`);
            }}
          >{preguntas[current]?.option1}</button>
          <button
            style={"option2" == correct ? { background: "green" } : {}}
            onClick={() => {
              sendAnswer(`${preguntas[current].id}`, `option2`);
            }}
          >{preguntas[current]?.option2}
          </button>
          <button
            style={"option3" == correct ? { background: "green" } : {}}
            onClick={() => {
              sendAnswer(`${preguntas[current].id}`, `option3`);
            }}
          >{preguntas[current]?.option3}
          </button>
          <button
            style={"option4" == correct ? { background: "green" } : {}}
            onClick={() => {
              sendAnswer(`${preguntas[current].id}`, `option4`);
            }}
          >{preguntas[current]?.option4}
          </button>
        </div>
        <button onClick={() => reset()}>Go back</button>
      </div>: navigate("/results")}
    </>
  );
}

export default Question;
