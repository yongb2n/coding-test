function solution(array, height) {
    let result = 0;
    
    for (const i of array) {
        i > height ? result++ : 0;
    }

    return result;
}