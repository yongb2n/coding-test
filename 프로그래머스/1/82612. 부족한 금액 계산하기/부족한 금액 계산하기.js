function solution(price, money, count) {
    // 기존 price원
    // N 번 째 이용 시 이용료 N배
    // 놀이기구 count번
    // 결국 원래 가진 money에서 얼마가 모자라는가
    let total = 0;
    
    for(let i = 1; i <= count; i++) {
        total += price * i;
    }
    
    return total > money ? total - money : 0;
}