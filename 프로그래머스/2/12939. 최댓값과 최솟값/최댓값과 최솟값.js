function solution(s) {
    const noSpace = s.split(' ').map(Number);
    const min = Math.min(...noSpace);
    const max = Math.max(...noSpace);
    
    return min + ' ' + max;
}