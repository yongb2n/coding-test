function solution(n) {
    let answer = []
    
    if(n === 1) return [1]
    
    if (n % 2 === 0) {
        return [n, ...solution(n / 2)]
    } else {
        return [n, ...solution(3 * n + 1)]
    }
}