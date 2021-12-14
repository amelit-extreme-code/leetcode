// const arr = [1, 2, 3, 4, 1, 1]
const arr = [1, 2, 3, 4, 5, 6, 6]

const containsDuplicate = (array) => {
    let arrayToCheck = []
    for (let index = 0; index < array.length; index++) {
        let value = array[index]
        console.log(arrayToCheck.indexOf(value), "log for array to check")
        if (arrayToCheck.indexOf(value) !== -1) {
            console.log(true)
            return true
        }
        arrayToCheck.push(value)
    }
    console.log(false)
    return false
}

containsDuplicate(arr)

const containDuplicate = (array) => {
    for (let index = 1; index < array.length; index++) {
        // const element = array[index]
        const checkOne = [...array]
        if (checkOne[5] === array[index]) {
            console.log("match!")
        }
    }
}

arr.map((itemOne, itemTwo) => console.log(itemOne === itemTwo))

containDuplicate(arr)
