function solution(myString) {
    return myString.split('').map(char => char === 'a' ? 'A' : char === 'A' ? 'A' : char.toLowerCase()).join('');
}