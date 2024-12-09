function solution(s) {
    const arr = s.split('');
    
    return arr.length % 2 === 0 ? arr.slice((arr.length / 2) - 1, (arr.length / 2) + 1).join('').toString() : arr.slice(arr.length / 2, arr.length / 2 + 1).toString();
}
