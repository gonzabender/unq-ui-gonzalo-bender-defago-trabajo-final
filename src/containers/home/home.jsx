import { useEffect, useState } from "react";
import Api from "../../Api";
import "../../App.css";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Fondo from "../../assets/images/como-jugar-tematizados-en-preguntados.webp";
function Homepage() {
  const navigate = useNavigate();
  const [dif, setDif] = useState([]);

  useEffect(() => {
    diff();
  }, []);

  async function diff() {
    try {
      const response = await Api.getDifficulties();
      setDif(response);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  }
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="container">
          <p className="title">Select difficulty</p>
          <div className="preguntas">
            {dif.map((difi) => (
              <button onClick={() => navigate(`/question/${difi}`)}>
                {difi}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
