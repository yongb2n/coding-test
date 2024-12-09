function solution(s) {
    const str = s.split('').map(char => char.charCodeAt(0));
    const dSortNum = str.sort((a, b) => b - a);
    const dSortStr = dSortNum.map(num => String.fromCharCode(num));
    
    return dSortStr.join('');
}