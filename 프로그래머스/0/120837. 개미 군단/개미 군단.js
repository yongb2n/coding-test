function solution(hp) {
    const generals = Math.floor(hp / 5);
    let remainder = hp % 5;
    
    const soldiers = Math.floor(remainder / 3);
    remainder = remainder % 3;
    
    return generals + soldiers + remainder;
}   