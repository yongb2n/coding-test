function solution(code) {
    let mode = 0
    let ret = ''

    for(let idx = 0; idx < code.length; idx++) {
        if(code[idx] === '1') {
            mode = mode === 0 ? 1 : 0
        }
        
        if(mode === 0) {
            if(code[idx] !== '1') {
                (idx % 2 === 0) ? ret += code[idx] : ret 
            }
        } else if(mode === 1) {
            if(code[idx] !== '1') {
                (idx % 2 === 1) ? ret += code[idx] : ret
            }
        }
    }
    
    
    return ret === '' ? "EMPTY" : ret
}