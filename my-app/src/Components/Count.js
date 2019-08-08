
export const ballImpact = (ball) => {
    if (ball === 3) {
        return 0
    }
    else {
        return ball + 1
    }
}



export const strikeImpact = (strike) => {
    if (strike === 2) {
        return 0
    }
    else {
        return strike + 1  
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

