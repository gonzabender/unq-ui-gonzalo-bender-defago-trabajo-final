import { useEffect, useState } from "react";
import Api from "../../Api";
import { useNavigate, useParams } from "react-router-dom";

function Question() {
  const [preguntas, setPreguntas] = useState([]);
  const [completed, setCompleted] = useState(false)
  const [correct, setCorrect] = useState("")
  
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    
    getAQuestion();
  }, [completed]);

  async function getAQuestion() {
    try {
      const response = await Api.questionByDifficulty(`${params.difficulty}`);
      setPreguntas(response);
      setCorrect("")
      console.log(response);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  }

  const sendAnswer = (questionId, option) => {
    Api.answerQuestion(questionId, option)
    .then((response) => handleResponse(response.data,option))
    .catch((response) => "Error" + response)
  }

  const handleResponse = (response, option) => {
    response.answer == true && 
    (setCorrect(option), setTimeout(() => {
      setCompleted(!completed);
    }, 700))
  }

  return (
    <>
      <div className="container">
        <p className="title">
          {preguntas.length > 0 ? preguntas[0].question : "Loading"}
        </p>
        <p>
          {"Difficulty: "} {`${params.difficulty}`}
        </p>
        <div className="preguntas">
          <button style={"option1" == correct ? {background:"green"} : {}}
            onClick={() => {
              sendAnswer(`${preguntas[0].id}`,`option1`)
            }}
          >
            {preguntas[0]?.option1}
          </button>
          <button 
          style={"option2" == correct ? {background:"green"} : {}}
          onClick={() => {
              sendAnswer(`${preguntas[0].id}`,`option2`)
            }}>
            {preguntas[0]?.option2}
          </button>
          <button style={"option3" == correct ? {background:"green"} : {}}
              onClick={() => {
              sendAnswer(`${preguntas[0].id}`,`option3`)
            }}>
            {preguntas[0]?.option3}
          </button>
          <button style={"option4" == correct ? {background:"green"} : {}}
          onClick={() => {
              sendAnswer(`${preguntas[0].id}`,`option4`)
            }}>
            {preguntas[0]?.option4}
          </button>
        </div>
      </div>
      <button onClick={() => navigate("/")}>Go back</button>
    </>
  );
}

export default Question;
