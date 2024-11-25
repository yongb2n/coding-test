function solution(num_list) {
    let sum = 0
    let times = 1
    
   for(let i of num_list) {
        sum += i
        times *= i
   }
    
    return times < sum ** 2 ? 1 : 0
}