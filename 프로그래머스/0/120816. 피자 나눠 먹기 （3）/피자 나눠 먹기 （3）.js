function solution(slice, n) {
    return n % slice > 0 ? Math.floor(n / slice) + 1 : n / slice;
}