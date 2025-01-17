function solution(s1, s2) {
  const set1 = new Set(s1);
  const set2 = new Set(s2);
  let count = 0;

  set1.forEach((item) => {
    if (set2.has(item)) {
      count++;
    }
  });

  return count;
}