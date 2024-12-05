function solution(numbers) {
    const allNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const filtered = allNum.filter(num => !numbers.includes(num));
    
    return filtered.reduce((acc, cur) => acc + cur, 0);
}