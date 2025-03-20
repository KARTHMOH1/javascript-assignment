function findintersection(arr1,arr2){
        return arr1.filter(value=>arr2.includes(value))
    }
    
    const array1=[1,2,3]
    const array2=[2,3,4]
    const intersection=findintersection(array1,array2)
    console.log(intersection)