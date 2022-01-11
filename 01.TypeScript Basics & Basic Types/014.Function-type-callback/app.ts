function addHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addHandle(12, 43, (result) => {
  console.log(result);
});
