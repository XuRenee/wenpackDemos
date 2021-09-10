function getNum(...nums) {
    let count = 0
    nums.map(i =>{
        count += i
    })
    return count
}

module.exports = getNum