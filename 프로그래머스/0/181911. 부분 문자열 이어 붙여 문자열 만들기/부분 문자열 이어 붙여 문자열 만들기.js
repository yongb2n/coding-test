function solution(my_strings, parts) {
    let answer = '';
    
    my_strings.map((str, i) => {
        const [s, e] = parts[i];
        const sliceStr = str.slice(s, e + 1);
        
        answer += sliceStr;
    });
    
    return answer;
}