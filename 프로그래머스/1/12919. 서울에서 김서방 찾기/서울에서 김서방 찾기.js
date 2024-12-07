function solution(seoul) {
    let location = 0;
    
    for(let i = 0; i < seoul.length; i++) {
        if(seoul[i] === 'Kim') {
            location = i;
        }
    }
    
    return `김서방은 ${location}에 있다`;
}