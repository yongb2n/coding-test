function solution(n) {
    const arr = n.toString().split('');
    let sum = 0;
    
    for(const i of arr) {
        sum += Number(i);
    }
    
    return sum;
}