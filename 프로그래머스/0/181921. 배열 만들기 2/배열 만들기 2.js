function solution(l, r) {
    let answer = []

    for(let i = l; i <= r; i++) {
        if([...i.toString()].every(char => char === '0' || char === '5')) {
            answer.push(i)
        }
    }
    
    return answer.length === 0 ? [-1] : answer
}