function solution(n) {
    const str = n.toString();
    const arr = [...str];
    let answer = 0;
    
    
    for(const i of arr) {
        answer += Number(i);
    }
    
    return answer;
}