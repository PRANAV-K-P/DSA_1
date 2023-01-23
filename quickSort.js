const pivot = (array, left, right) => {
    let p = right;
    let j = left;
    let i = left - 1;
    while (j <= p) {
        if (array[j] < array[p] ) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            j++;
        } else {
            j++;
        }
    }
    i++;
    [array[i], array[p]] = [array[p], array[i]];
    return i;
}

const quick = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        let pIdx = pivot(array, left, right);
        quick(array, left, pIdx - 1);
        quick(array, pIdx + 1, right);
    }
    return array;
}

const array = [2, 1, 12, 34, 123, 45, 654];
console.log(quick(array));