const result = (array, target) => {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (array[middle] === target) {
            return middle;
        } else if (target < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
}
let array = [4, 6, 7, 9, 12, 34, 56, 89, 45];
target = 89;
let position = result(array, target);
position++;
if (position)
    console.log("Element found at postion ", position);   
else
    console.log("Element is not in the array");


