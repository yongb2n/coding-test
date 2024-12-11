function solution(n, m) {
    let a = n;
    let b = m;
    
    while(b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    
    const low = a;
    const high = (n * m) / a;
    
    return [low, high];
}