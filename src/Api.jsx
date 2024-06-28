import Axios from "axios";
const API_URL = `https://preguntados-api.vercel.app/api`;
const post = (url,body,config) => Axios.post(url,body,config).then(response => response)

async function getQuestion(dif) {
  await Axios.get(`${API_URL}/${dif}`)
  .then( function (response) {
    return response
  })
  .catch(function (error) {
    return null
  })
}

const getQuestions = async (dif) => {
  try {
    const response = await Axios.get(`${API_URL}/${dif}`);
    return response.data;
  } catch {
    return null;
  }
};

const getDifficulties = async () => {
    try {
        const response = await Axios.get(`${API_URL}/difficulty`);
        return response.data;
      } catch {
        return null;
      }
};

const questionByDifficulty = async (dif) => {
    try {
        const response = await Axios.get(`${API_URL}/questions?difficulty${dif}`);
        return response.data;
      } catch {
        return null;
      }
}

const answerQuestion = (questionId, option) => post(`${API_URL}/answer`, { "questionId": `${questionId}`, "option": `${option}` })
   




const Api = {
  API_URL,
  getQuestion,
  getQuestions,
  questionByDifficulty,
  getDifficulties,
  answerQuestion
};
export default Api;
