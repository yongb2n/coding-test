function solution(dot) {
    for(let i = 0; i < 2; i++) {
        if(dot[i] > 0 && dot[i + 1] > 0) return 1;
        if(dot[i] < 0 && dot[i + 1] > 0) return 2;
        if(dot[i] < 0 && dot[i + 1] < 0) return 3;
        if(dot[i] > 0 && dot[i + 1] < 0) return 4;
    }
}