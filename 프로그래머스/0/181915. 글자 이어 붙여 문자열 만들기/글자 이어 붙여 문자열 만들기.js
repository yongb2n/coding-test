function solution(my_string, index_list) {
    let result = '';
    
    for (const i of index_list) {
        result += my_string[i];
    }
    
    return result;
}