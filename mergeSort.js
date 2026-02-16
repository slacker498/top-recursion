function merge(A, B) {
    let C = [];
    let [i, j, k] = [0, 0, 0];
    while (i < A.length && j < B.length) {
        if (A[i] < B[j]) C[k++] = A[i++];
        else C[k++] = B[j++];
    }
    
    for (; i < A.length; i++) C[k++] = A[i];
    for (; j < B.length; j++) C[k++] = B[j];

    return C;
}

function mergeSort(array) {
    let sorted = [];

    let low = 0;
    let high = array.length - 1;

    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        let A = mergeSort(array.slice(low, mid + 1));
        let B = mergeSort(array.slice(mid + 1, high + 1));
        sorted = merge(A, B)
    } else sorted.push(array[0])

    return sorted;
}


export default mergeSort;