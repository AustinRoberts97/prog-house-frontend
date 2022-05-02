import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import VotingCard from "./components/VotingCard";
import PredictionCard from "./components/PredictionCard";
import './App.css';
import { Container } from '@mui/material';
import teamsJson from "./lib/teams.json";
import getAllPredictions from "./services/PredictionService.ts"


function App() {
  let [teams, setTeams] = useState([])
  let predictions = getAllPredictions()

  useEffect(() => {
    setTeams(teamsJson);
  }, []);

  function incrementVoteCount(teamId) {
    teams = teams.map((team) => {
      if (team._id === teamId) {
        team.votes = team.votes + 1
      }
      return team;
    });
    setTeams(teams);
  }
  let predictionOptions = ["As green as possible", "I'm colorblind"]
  console.log(predictions)
  predictions.map(prediction => {
    return (
      <Container className="app">
        <PredictionCard
        question={prediction.question}
        options={prediction.options}
        />
      </Container>
    )
  })
  
}

export default App;
