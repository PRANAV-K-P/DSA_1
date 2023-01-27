const sort = (array) => {
    let i, temp, j;
    for (i = 1; i < array.length; i++) {
        temp = array[i];
        j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
let array = [3, 23, 1, 2, 34, 4, 3, 5, 7];
sort(array);
