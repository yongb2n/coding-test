function solution(order) {
    let result = 0;
    
    for(let i = 0; i < order.length; i++) {
        order[i].includes('cafelatte') ? result += 5000 : result += 4500;
    }
    
    return result;
}