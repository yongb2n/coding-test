function solution(n) {
    let remainder = [];
    
    for(let i = 1; i <= n; i++) {
        n % i === 1 ? remainder.push(i) : 0
    }
    
    return Math.min(...remainder);
}