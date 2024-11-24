function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    let prefix = my_string.slice(0, s)
    let suffix = my_string.slice(s + overwrite_string.length)
    
    answer = prefix + overwrite_string + suffix
    
    return answer;
}