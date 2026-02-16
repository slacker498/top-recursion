function fibs(num) {
  let res = [];
  for (let i = 0; i < num; i++) {
    if (i < 2) res.push(i);
    else res.push(res[0] + res[1]);
  }
  return res;
}

function fibsRec(num) {
  let res = [];

  if (num < 2) res.push(num);
  else res.push(fibsRec(num-1) + fibsRec(nums-2))
  

  return res;
}