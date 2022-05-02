import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

export default function VotingCard(props) {
    let { team, incrementVoteCount } = props;


    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {team.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Vote count: {team.votes}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => incrementVoteCount(team._id)}>Vote</Button>
            </CardActions>
        </React.Fragment>
    )

    return (
        <Box sx={{ midWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    )
}