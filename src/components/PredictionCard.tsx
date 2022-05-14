import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RadioGroup, FormControl, FormControlLabel, Radio  } from "@mui/material";
import { getPrediction, votePrediction } from '../services/PredictionService';
import { useNavigate } from "react-router-dom";

interface PredictionProps {
    id: string;
}

export interface Prediction {
    title: string;
    options: Option[];
}
export interface Option {
    id: string;
    value: string;
    votes: string;
}

export interface PredictionState {
    title: string;
    options: Option[];
}
export default function PredictionCard(props: PredictionProps) {
    let { id } = props;
    const [prediction, setPrediction] = useState<Prediction | undefined>({ title: "", options: []});
    const [selectedOption, setSelectedOption] = useState<Number | undefined>(undefined);
    const navigate = useNavigate();
    useEffect(() => {
        getPrediction(id).then(response => {
            const data = response.data[0]
            setPrediction({...prediction, title: data.title, options: data.options})
        });
    }, [id])

    function selectOption(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedOption(parseInt(event.target.value))
    }

    function viewResults() {
        navigate('/results/' + id);
    }

    let optionButtons = prediction!.options!.map(option => 
        <FormControlLabel key={option.id} value={option.id} control={<Radio />} label={option.value} />)


    return (
        <div>
            <Card>
                <CardHeader title={prediction!.title}/>
                <CardContent>
                    <Typography sx={{ fontSize: 14}}>Make a choice:</Typography>
                    <FormControl>
                    <RadioGroup
                        name="radio-buttons-group"
                        onChange={selectOption}
                    >
                        {optionButtons}
                    </RadioGroup>
                    </FormControl>
                </CardContent>
                <CardActions>
                    <Button variant="contained" onClick={() => votePrediction(selectedOption)}>Vote</Button>
                    <Button variant="outlined" onClick={() => viewResults()}>Results</Button>
                    <Button variant="outlined">Share</Button>
                </CardActions>
            </Card>
        </div>
                
    );
}