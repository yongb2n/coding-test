function solution(my_string) {
    let result = 0;
    
    for(const i of my_string) {
        if(!isNaN(i)) {
            result += Number(i);
        }
    }
    
    return result;
}