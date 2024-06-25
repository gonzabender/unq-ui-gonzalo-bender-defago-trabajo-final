import Axios from "axios";
const API_URL = `https://preguntados-api.vercel.app/api`;


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

const answerQuestion = async () => {
  try {
    const response = await Axios.post(`${API_URL}/questions?difficulty${dif}`,{});
    return response.data;
  } catch {
    return null;
  }
}


const Api = {
  API_URL,
  getQuestion,
  getQuestions,
  questionByDifficulty,
  getDifficulties
};
export default Api;
