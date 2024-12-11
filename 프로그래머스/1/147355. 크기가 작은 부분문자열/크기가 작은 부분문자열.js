function solution(t, p) {
    let result = 0;
    
    for(let i = 0; i <= t.length - p.length; i++) {
        const str = t.substring(i, i + p.length);
        const value = Number(str);
        
        value <= Number(p) ? result++ : 0;
    }
    
    return result;
}   