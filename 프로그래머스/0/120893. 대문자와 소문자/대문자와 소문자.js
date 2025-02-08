function solution(my_string) {
    let result = '';

    for(const i of my_string) {
        result += i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase();
    }
    
    return result;
}
