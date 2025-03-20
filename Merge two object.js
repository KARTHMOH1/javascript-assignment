function mergeobject(obj1,obj2){
        return {...obj1,...obj2}
    }
    
    let object1={a:1,b:2}
    let object2={b:2,c:3}
    
    let mergedobject=mergeobject(object1,object2)
    
    console.log(mergedobject)