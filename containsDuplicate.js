// const arr = [1, 2, 3, 4, 1, 1]
const arr = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6]

const containsDuplicate = (array) => {
    const arrayInsideOfSet = new Set(array)
    const calculate = arrayInsideOfSet.size !== array.length
    console.log(calculate)
    return calculate
}

containsDuplicate(arr)
