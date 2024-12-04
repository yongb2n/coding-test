function solution(my_string, n) {
    const reversed = my_string.split('').reverse().join('');
    
    const sliced = reversed.slice(0, n);
    
    const reReversed = sliced.split('').reverse().join('');

    return reReversed;
}