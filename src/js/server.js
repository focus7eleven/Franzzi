function* fibonacci(){
  let [pre, curr] = [0, 1];
  for(;;) {
    [pre, curr] = [curr, pre + curr]
    yield curr
  }
}

for(let n of fibonacci()) {
  console.log('[DEBUG] - n: ',n);
  if(n > 100) break;
}