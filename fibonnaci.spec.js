import {fibs, fibsRec} from "./fibonnaci.js"

// Tests for iterative approach
test("Function with param 0", () => {
    expect(fibs(0)).toEqual([])
})

test("Function with param 1", () => {
    expect(fibs(1)).toEqual([0])
})

test("Function with param 2", () => {
    expect(fibs(2)).toEqual([0, 1])
})

test("Function with param 3", () => {
    expect(fibs(3)).toEqual([0, 1, 1])
})

test("Function with param 8", () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
})


// Tests for recursive approach

test("Function with param 0", () => {
    expect(fibsRec(0)).toEqual([])
})

test("Function with param 1", () => {
    expect(fibsRec(1)).toEqual([0])
})

test("Function with param 2", () => {
    expect(fibsRec(2)).toEqual([0, 1])
})

test("Function with param 3", () => {
    expect(fibsRec(3)).toEqual([0, 1, 1])
})

test("Function with param 8", () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
})