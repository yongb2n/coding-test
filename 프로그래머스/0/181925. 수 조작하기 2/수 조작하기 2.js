function solution(numLog) {
    let result = ''
    
    for(let i = 0; i < numLog.length - 1; i++) {
        if(numLog[i] === numLog[i + 1] - 1) {
            result += 'w'
        } else if(numLog[i] === numLog[i + 1] + 1) {
            result += 's'
        } else if(numLog[i] === numLog[i + 1] - 10) {
            result += 'd'
        } else if(numLog[i] === numLog[i + 1] + 10 ) {
            result += 'a'
        }
    }
    
    return result
}
