const result = (array, target) => {
    for (i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
}
let array=[5, 6, 7, 4, 6, 75, 3], i;
target = 3;
const position = result(array, target);
if (position)
    console.log("Element found at postion ", position + 1);
else
    console.log("Element is not in the array");

