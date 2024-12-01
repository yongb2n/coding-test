function solution(number) {
    let result = 0;
    
    for (const i of number) {
        result += Number(i);
    }
    
    return result % 9;
}