function solution(s){
    const str = s.toLowerCase();
    
    return str.match(/p/g)?.length === str.match(/y/g)?.length ? true : false;
}