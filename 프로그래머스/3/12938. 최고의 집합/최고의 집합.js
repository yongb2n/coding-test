function solution(n, s) {
    if(n > s) return [-1];

    const quotient = Math.floor(s / n);
    const remainder = s % n;

    const result = Array(n).fill(quotient);

    for(let i = 0; i < remainder; i++) {
        result[result.length - 1 - i]++;
    }

    return result;
}
