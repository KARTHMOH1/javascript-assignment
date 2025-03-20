function removefalsy(arr){
        return arr.filter(Boolean)
    }
    
    const array=[0,1,false,2,'',3]
    const removevalue=removefalsy(array)
    console.log(removevalue)