function mergeSort(array) {
    let length = array.length;
    if (length <= 1)  return;
    let middle = length / 2;
    let leftArray = new Array(middle);
    let rightArray = new Array(length - middle);
    let i = 0; // left array
    let j = 0; // right array
    for(; i < length; i++) {
        if (i < middle) {
            leftArray[i] = array[i];
        } else {
            rightArray[j] = array[i];
            j++;
        }
    }
    mergeSort(leftArray);
    mergeSort(rightArray);
    merge(leftArray,rightArray,array);
    return array;
}
function merge(leftArray,rightArray,array) {
    let leftSize = array.length / 2;
    let rightSize = array.length - leftSize;
    let i = 0, l = 0, r = 0;
    while(l < leftSize && r < rightSize) {
        if (leftArray[l] < rightArray[r]) {
            array[i] = leftArray[l];
            i++;
            l++;
        } else {
            array[i] = rightArray[r];
            i++;
            r++;
        }
    }
    while(l < leftSize) {
        array[i] = leftArray[l];
        i++;
        l++;
    }
    while(r < rightSize) {
        array[i] = rightArray[r];
        i++;
        r++;
    }
}
let array = [7,3,43,1];
console.log(mergeSort(array));

