function solution(number) {
    let result = 0;
    let arr = [...number];
    
    for (let i = 0; i < arr.length; i++) {
        result += Number(arr[i]);
    }
    
    return result % 9
}