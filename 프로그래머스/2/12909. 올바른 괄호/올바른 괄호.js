function solution(s){
    let count = 0;
    
    for(const char of s) {
        char === '(' ? count++ : count--;
        
        if(count < 0) return false;
    }
    
    return count === 0;
}