export let initialScore = 0;
export let playedQuestions = 0;

export default function setScore(score, evalAnswer) {
    
    if(evalAnswer === 'right'){
        initialScore = score + 1;
        return initialScore;
    } else if(evalAnswer === 'wrong'){
        return initialScore;
    } else {
        return initialScore;
    }
};

export function increasePlayed() {
    playedQuestions = playedQuestions + 1;
}

export function resetScore() {
    initialScore = 0;
    playedQuestions = 0;
}