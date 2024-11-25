function solution(num_list) {
    let oddString = ''
    let evenString = ''
    
    for(let i of num_list) {
        if(i % 2 === 1) {
            oddString += i.toString()
        } else {
            evenString += i.toString()
        }
    }
    
    return Number(oddString) + Number(evenString)
}