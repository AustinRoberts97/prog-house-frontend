import { useEffect, useState } from 'react';
import { useInterval } from '../util/UseInterval';
import { Prediction, Option } from './PredictionCard';
import { getPrediction, votePrediction } from '../services/PredictionService';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';

interface ResultProps {
    id: string;
}

export default function ResultCard(props: ResultProps) {
    let { id } = props;
    const [prediction, setState] = useState<Prediction | undefined>({ title: "", options: []});
    useEffect(() => {
        getPrediction(id).then(response => {
            const data = response.data[0]
            setState({...prediction, title: data.title, options: data.options})
        });
    }, [id])

    useInterval(async () => {
        console.log('Retrieving new results');
        const response = await getPrediction(id);
        const data = response.data[0]
        setState({...prediction, title: data.title, options: data.options})
    }, 1000);

    let results = prediction!.options!.map(option =>
        <Typography key={option.id} sx={{ fontSize: 14 }}>{option.value}: {option.votes}</Typography>)

    return (
        <div>
            <Card>
                <CardHeader title="Results"/>
                <CardContent>
                    {results}
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </div>
    )
}