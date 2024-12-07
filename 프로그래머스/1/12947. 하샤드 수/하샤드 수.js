function solution(x) {
    const number = x.toString().split('').map(Number);
    let sum = 0;
    
    for(let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    
    return x % sum === 0 ? true : false;
}