const bubbleSort = (array) => {
    let temp, i, j;
    for (i = 0; i < array.length - 1; i++) {
        for(j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let array = [5, 3, 2, 21, 34, 22, 1];
bubbleSort(array);