const result = function(array) {
    let i, j;
    for (i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i];
    }
    for (i = 0; i < array.length - 1; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}
const arr=[-4, -1, 0, 3, 10];
console.log(result(arr));
