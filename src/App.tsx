import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllPredictions } from './services/PredictionService';
import { Container, Typography } from '@mui/material';
import PredictionCard from "./components/PredictionCard";

function App() {
  let predictions = getAllPredictions()
  const cards = predictions.map(prediction => 
        <PredictionCard
        question={prediction.question}
        options={prediction.options}
        />
      );
  return (
    <Container className="app">
      {cards}
    </Container>
  )
}

export default App;
