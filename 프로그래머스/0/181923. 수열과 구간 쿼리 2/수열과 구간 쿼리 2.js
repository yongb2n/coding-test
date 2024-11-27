function solution(arr, queries) {
    let answer = []
    
    queries.forEach(([s, e, k]) => {
        const filteredValue = arr.slice(s, e + 1).filter(value => value > k) 
        const minValue = filteredValue.length > 0 ? Math.min(...filteredValue) : -1
        answer.push(minValue)
    })
    
    return answer
}