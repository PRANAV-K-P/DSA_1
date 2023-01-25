let binary = function (array, target, start, end) {
    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);
    if(array[mid] === target) 
      return mid;
    else if (array[mid] > target) 
      return binary(array, target, start, mid - 1);
    else 
      return binary(array, target, mid + 1, end);

}
let arr = [4,6,7,12,23,56,89];
let target = 12;
let position = binary(arr, target, 0, arr.length - 1);
if(position) {
    position++;
    console.log("Item found at position ",position);
}else {
    console.log("Item not found");
}