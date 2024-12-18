function solution(n) {
    const arr = [];

    for(let i = 2; i <= Math.sqrt(n); i++) {
        while(n % i === 0) {
            if(!arr.includes(i)) {
                arr.push(i);
            }
            n /= i;
        }
    }
    
    if(n > 1) {
        arr.push(n);
    }
    
    return arr;
}