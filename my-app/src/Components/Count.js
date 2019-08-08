
export const ballImpact = (ball) => {
    if (ball === 4) {
        return 0
    }
    else {
        return ball
    }
}



export const strikeImpact = (strike) => {
    if (strike === 3) {
        return 0
    }
    else {
        return strike   
    }
}

export const hitImpact = (count) => {
    return count - count
}

export const foulImpact = (count) => {
    if (count === 0 || count === 1) {
        return count + 1
    }
    else {
        return 2
    }
}

