function solution(sides) {
    const arr = sides.sort((a, b) => b - a);
    
    return arr[1] + arr[2] > arr[0] ? 1 : 2;
}