export let initialScore = 0;

export default function setScore(score, evalAnswer) {
    
    if(evalAnswer === 'right'){
        initialScore = score + 1;
        console.log(initialScore);
        return initialScore;
    } else if(evalAnswer === 'wrong'){
        console.log(initialScore);
        return initialScore;
    } else {
        return initialScore;
    }
};

export function resetScore() {
    initialScore = 0;
    return initialScore;
}