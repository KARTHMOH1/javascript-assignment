function grouparray(arr){
        return arr.reduce((acc,obj)=>{
            const key = obj.category
            if(!acc[key]){
                acc[key]=[]
            }
            acc[key].push(obj)
            return acc
    
        },{})
    }
    
    let object=[{ id: 1, category: 'fruit' }, { id: 2, category: 'vegetable' }, { id: 3, category: 'fruit' } ]
    let arraygroup=grouparray(object)
    console.log(arraygroup)