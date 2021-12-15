const arr = [0, 1, 2, 3, 5, 6, 7]

const missingNumber = (array) => {
    let sum = new Array()
    sum = array.reduce((a, b) => a + b)
    let lengthOfTheArray = array.length
    const result = (lengthOfTheArray * (lengthOfTheArray + 1)) / 2 - sum
    console.log(result)
    return result
}

missingNumber(arr)
