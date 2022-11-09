arr1 = [10, 20, 14, 16, 18]
arr2 = [30, 23, 54, 33, 96]

function smallest(one, two) {
    let diff = []
    for (i in one) {
       for (j in two) {
        diff.push(Math.abs(one[i]-two[j]))
        }
    } 
    // console.log(diff)
    const closest = diff.reduce((prev, curr) => {
        return (Math.abs(curr) < Math.abs(prev) ? curr : prev)
    })
    
    console.log(closest)
}

smallest(arr1, arr2)