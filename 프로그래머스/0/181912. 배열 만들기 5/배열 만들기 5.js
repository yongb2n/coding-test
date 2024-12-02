function solution(intStrs, k, s, l) {
    const answer = [];
    
    for(const i of intStrs) {
        const sliceStr = i.slice(s, s + l);
        
        Number(sliceStr) > k ? answer.push(Number(sliceStr)) : 0;
    }
    
    return answer;
}