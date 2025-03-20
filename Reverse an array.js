function reversearray(arr){
        return arr.slice().reverse()
    }
    
    let originalarray = [1,2,3,4,5]
    let reversedarray=reversearray(originalarray)
    console.log(reversedarray)