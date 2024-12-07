function solution(arr, divisor) {
    let answer = [];
    
    for(const i of arr) {
        i % divisor === 0 ? answer.push(i) : 0;
    }
    
    return answer.length !== 0 ? answer.sort((a, b) => a - b) : [-1];
}