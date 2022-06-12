export const score = 0;

export const setScore = (score, evalAnswer) => {
    
    if(evalAnswer === 'right'){
        score += 1;
        return score;
        console.log('Blabla')
    }
    else if(evalAnswer === 'wrong'){
        score += 0;
        return score;
        console.log('Blub')
    }
}

export const resetScore = (score) =>{
    score = 0;
    return score;
}