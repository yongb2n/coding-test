function solution(n) {
    const arr = [];
    
    for(let i = 1; i <= n; i++) {
        i % 2 === 1 ? arr.push(i) : 0;
    }
    
    return arr;
}
