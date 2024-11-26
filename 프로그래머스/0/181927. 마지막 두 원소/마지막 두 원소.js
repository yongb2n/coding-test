function solution(num_list) {
    let lastIndex = num_list[num_list.length - 1]
    let lastPrevIndex = num_list[num_list.length - 2]
   
    lastIndex > lastPrevIndex ? num_list.push(lastIndex - lastPrevIndex) : num_list.push(lastIndex * 2)
    
    return num_list
}