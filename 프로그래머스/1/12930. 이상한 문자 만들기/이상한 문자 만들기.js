function solution(s) {
    const words = s.split(' ');
            
    const transformed = words.map(word => word.split('').map((a, i) => i % 2 === 0 ? a.toUpperCase() : a.toLowerCase()).join(''));
    
    return transformed.join(' ');
}