import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { RadioGroup, FormControl, FormControlLabel, Radio  } from "@mui/material";

export default function PredictionCard(props) {
    let {question, options} = props;

    return (
        <div>
            <Card>
                <CardHeader title={question}/>
                <CardContent>
                    <Typography sx={{ fontSize: 14}}>Make a choice:</Typography>
                    <FormControl>
                    <RadioGroup
                        name="radio-buttons-group"
                    >
                        {options.map(option => 
                            <FormControlLabel value={option} control={<Radio />} label={option} />)
                            }
                    </RadioGroup>
                    </FormControl>
                </CardContent>
                <CardActions>
                    <Button variant="contained">Vote</Button>
                    <Button variant="outlined">Results</Button>
                    <Button variant="outlined">Share</Button>
                </CardActions>
            </Card>
        </div>
                
    )
}