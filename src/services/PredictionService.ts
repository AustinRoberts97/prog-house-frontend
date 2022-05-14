import axios from "axios";
const axios_instance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000,
  });

export function getPrediction(predictionId: any) {
    // Get prediction using axios
    return axios_instance.get("prediction/" + predictionId)
}

export function votePrediction(optionId: any) {
    axios_instance.put("vote", {
        "option": optionId
    })
}

export function CreatePredictionCall(predictionData: any) {
    return axios_instance.post("prediction/", predictionData)
}
