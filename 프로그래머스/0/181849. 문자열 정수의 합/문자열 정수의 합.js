function solution(num_str) {
    let sum = 0;
    const arr = num_str.split('');

    for(const i of arr) {
        sum += Number(i);
    }
    
    return sum;
}