function solution(arr1, arr2) {
    return arr1.map((a, i) => 
        a.map((v, j) => v + arr2[i][j])
    );
}
