function solution(a, b) {
    var answer = 0;
    
    if(Number(a.toString() + b.toString()) >= 2 * Number(a.toString() * b.toString())) {
        answer = Number(a.toString() + b.toString())
    } else {
        answer = 2 * Number(a.toString() * b.toString())
    }
    
    return answer;
}