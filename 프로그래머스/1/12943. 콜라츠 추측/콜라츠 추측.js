function solution(num) {
    let result = 0;
    
    while (num !== 1) {
        if(result >= 500) return -1;
        
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        result++;
    }

    return result;
}