function digPow(n, p){

    let i = 0
    let k = 0
    const numArray = n.toString().split('')
    numArray.forEach((num, index, array) => array[index] = Number(num))
    
    while (i < numArray.length) {
        numArray [i] = Math.pow(numArray[i], p)
        p++
        i++
    }

    const result = numArray.reduce( (sum, value) => sum + value, 0)

    do {
        if((k * n) === result){
            return k
        } else {
            k++
        }
    } while (k <= n)

    return -1
}