function solution(num_list) {
    let sum = 0
    let times = 1
    
    for(let i = 0; i < num_list.length; i++) {
        sum += num_list[i]
        times *= num_list[i]
    }
    
    return times < sum ** 2 ? 1 : 0
}