const array = [1, 2, 1, 3, 2];

for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
        console.log(array[i]);
        break;
    }
}
