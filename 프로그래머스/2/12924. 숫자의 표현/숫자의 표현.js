function solution(n) {  
    let result = 0;
    
    for(let i = 1; i * (i - 1) / 2 < n; i++) {
        const num = n - (i * (i - 1)) / 2;
        
        if(num > 0 && num % i === 0) {
            result++;
        }
    }
    
    return result;
}
