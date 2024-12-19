function solution(sides) {
    const [a, b] = sides.sort((x, y) => x - y);
    let count = 0;
    
    for(let c = b - a + 1; c <= b; c++) {
        count++;
    }
    
    for(let c = b + 1; c < a + b; c++) {
        count++;
    }
    
    return count;
}