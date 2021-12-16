const arr = [1, 2, 3, 4, 7, 8, 7, 9, 10, 21]

const findDisappearedNumbers = (nums) => {
    const sortedSet = new Set()
    for (let i = 0; i < nums.length; i++) {
        sortedSet.add(i + 1)
    }
    console.log(sortedSet, "this is the set after first loop")
    for (const num of nums) {
        sortedSet.delete(num)
    }

    return [...sortedSet]
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1, 11]))
// console.log(findDisappearedNumbers(arr))
