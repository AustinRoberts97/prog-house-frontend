import './App.css';
import { Container, Typography } from '@mui/material';
import PredictionCard from "./components/PredictionCard";
import ResultCard from './components/ResultCard';
import CreatePrediction from "./components/CreatePrediction";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
          <nav>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="/prediction">Create Prediction</Link>
              </li>
            </ul>
          </nav>
          <Routes>
        <Route path="/prediction/:id" element={<PredictionPage />}>
        </Route>
        <Route path="/results/:id" element={<ResultPage />}>
        </Route>
        <Route path="/prediction" element={<CreatePredictionPage/>}>
        </Route>
      </Routes>
      </div>
    </Router>
  )
}

function PredictionPage() {
  let {id} = useParams()
  return (
    <Container className="app">
      <PredictionCard id={id!}/>
      <ResultCard id={id!}/>
    </Container>
  )
}

function ResultPage() {
  let {id} = useParams()
  return (
    <Container className="app">
      <ResultCard id={id!}/>
    </Container>
  )
}

function CreatePredictionPage() {
  return (
    <Container className="app">
      <Typography>CREATE PREDICTION</Typography>
      <CreatePrediction/>
    </Container>
  )
}

export default App;
