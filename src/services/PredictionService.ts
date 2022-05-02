export function getAllPredictions() {
    return [
        {
            id: 1,
            question: 'How green can a green screen be',
            options: [
                'never too green',
                'not very green',
                'im colorblind'
            ],
            votes: 0
        },
        {
            id: 2,
            question: 'best WoW class',
            options: [
                'paladin',
                'paladin again',
                'anything else (why would you pick this)'
            ],
            votes: 0
        },
        {
            id: 3,
            question: 'biggest fear',
            options: [
                'needles',
                'spiders',
                'snakes',
                'gritty'
            ],
            votes: 0
        }
    ]
}

export function incrementVoteCount(predictionId: number) {

}