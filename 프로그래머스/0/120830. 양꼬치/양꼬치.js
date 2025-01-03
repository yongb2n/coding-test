function solution(n, k) {
    const a = 12000;
    const b = 2000;

    const service = Math.floor(n / 10);
    
    const c = k - service;

    return (a * n) + (b * c);
}