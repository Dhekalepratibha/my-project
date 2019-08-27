function fnprm(fn){
    fn()
}

 function prm(){
     console.log(`this fn coming as parameter`)
 }

 fnprm(prm)
 fnprm(function() {
     console.log(`Ano fn`)
 })
 fnprm(()=>console.log(`lambda prm`))