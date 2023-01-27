const sort = (array) => {
    let i, temp, j, min;
    for (i = 0; i < array.length - 1; i++) {
        min = i;
        for (j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
let array = [3, 23, 1, 2, 34, 4, 3, 5, 7];
sort(array);
