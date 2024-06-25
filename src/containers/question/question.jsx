import { useEffect,useState } from "react";
import Api from "../../Api";
import { useNavigate, useParams } from "react-router-dom";

function Question(){
const [preguntas, setPreguntas] = useState([]);

    const navigate = useNavigate()
    const params = useParams()
  
    useEffect(() => {
    getAQuestion();
  }, []);



  async function getAQuestion() {
    try {
      const response = await Api.questionByDifficulty(`${params.difficulty}`);
      setPreguntas(response);
      console.log(response); 
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  }


  return (
     <>
      <div className="container">
      <p className="title">
         {preguntas.length > 0 ? preguntas[0].question : "Loading"}
        </p>
        <p>{"Difficulty: " } {`${params.difficulty}`}</p>
      <div className="preguntas">
      <button>{preguntas[0]?.option1}</button>
      <button>{preguntas[0]?.option2}</button>
      <button>{preguntas[0]?.option3}</button>
      <button>{preguntas[0]?.option4}</button>

          
        
      </div>
    </div> 
    <button onClick={() => navigate("/")} >Go back</button>
    </>
  );
}

export default Question;