let obj = {
   cnt: 40,
   rec: true,
   fn: () =>console.log(`fn`),
   inObj: {
       col : `red`
   }
}

obj.fn()
obj.inObj.col ='blue'

function calc(){
 return{
     age :80
 }
}
calc().age =75