function leftRotate(arr, d, n) {
  for (i = 0; i < d; i++) leftRotatebyOne(arr, n);
}

function leftRotatebyOne(arr, n) {
  var i, temp;
  temp = arr[0];
  for (i = 0; i < n - 1; i++) arr[i] = arr[i + 1];
  arr[n - 1] = temp;
}

function printArray(arr, n) {
  //for (i = 0; i < n; i++)
  console.log(arr);
}

var arr = [1, 2, 3, 4, 5];
leftRotate(arr, 2, 5);
printArray(arr, 5);
