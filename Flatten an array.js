function flattenarray(arr){
        return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenarray(val)) : acc.concat(val),[])
    }
    
    let nestedarray=[1,[2,3],[4,[5]]]
    let flattenedarray=flattenarray(nestedarray)
    console.log(flattenedarray)