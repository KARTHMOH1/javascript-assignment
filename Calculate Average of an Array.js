function totalaverage(arr){
   const sum= arr.reduce((a,b)=>a+b,0)
   return sum/arr.length
}

const array=[1,2,3,4,5]
const average=totalaverage(array)
console.log(average)