function fibs(num) {
  let res = [];
  for (let i = 0; i < num; i++) {
    if (i == 0 || i == 1) res.push(i);
    else res.push(res[i-1] + res[i-2]);
  }
  return res;
}

function fibsRec(num) {
  let res = [];

  for (let i = 0; i < num; i++) {
    res.push(fibonnaci(i))
  }
  return res;
}

// Helper function for fibsRec
function fibonnaci(num) {
  if (num < 2) return num;
  else return fibonnaci(num-1) + fibonnaci(num-2);
}

export {fibs, fibsRec}