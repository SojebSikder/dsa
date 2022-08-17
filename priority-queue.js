// Priority Queue implementation in js

function heapify(arr, n, i) {
  // Find the largest among root, left child and right child
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && arr[i] < arr[l]) {
    largest = l;
  }
  if (r < n && arr[largest] < arr[r]) {
    largest = r;
  }
  // Swap and contunie heapifying if root is not largest
  if (largest != i) {
    arr[i] = arr[largest];
    arr[largest] = arr[i];
    heapify(arr, n, largest);
  }
}
// Function to insert and element into the tree
function insert(array, newNum) {
  let size = array.length;
  if (size == 0) {
    array.push(newNum);
  } else {
    array.push(newNum);
    for (let i = size / 2 - 1; i > 0; i--) {
      heapify(array, size, i);
    }
  }
}

// Function to delete an element from the tree
function deleteNode(array, num) {
  let size = array.length;
  let i;
  for (i = 0; i < size; i++) {
    if (num == array[i]) {
      break;
    }
  }
  array[i], (array[size - 1] = array[size - 1]), array[i];
  delete array[size - 1];
  for (let j = size / 2 - 1; j >= 0; j--) {
    heapify(array, array.length, i);
  }
}

arr = [];
insert(arr, 3);
insert(arr, 4);
insert(arr, 9);
insert(arr, 5);
insert(arr, 2);

console.log("Max-Heap array: " + String(arr));

deleteNode(arr, 4);
console.log("After deleting an element: " + String(arr));
