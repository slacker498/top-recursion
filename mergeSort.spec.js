import mergeSort from "./mergeSort"

test("Test with empty array", () => {
    expect(mergeSort([])).toEqual([])
})

test("Test with an array of length 1", () => {
    expect(mergeSort([73])).toEqual([73])
})

test("Test with an already sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
})

test("Test A: Test with an unsorted array", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
})

test("Test B: Test with an unsorted array", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
})