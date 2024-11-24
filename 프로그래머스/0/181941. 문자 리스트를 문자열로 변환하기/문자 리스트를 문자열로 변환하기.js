function solution(arr) {
    var answer = '';
    
    // arr 순서대로 이어 붙이기
    
    for(let i of arr) {
      answer += i
    }
    return answer;
}