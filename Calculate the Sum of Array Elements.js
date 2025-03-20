function calculatesum(arr){
        return arr.reduce((total,value)=>total+value,0)
    }
    
    const array=[1,2,3,4,5]
    const sum=calculatesum(array)
    console.log(sum)