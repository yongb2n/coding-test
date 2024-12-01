function solution(my_string, queries) {
    queries.forEach(([s, e]) => {
        const result = my_string.slice(s, e + 1);
        const reverse = result.split('').reverse().join('');
        my_string = my_string.slice(0, s) + reverse + my_string.slice(e + 1);
    });
    
    return my_string;
}