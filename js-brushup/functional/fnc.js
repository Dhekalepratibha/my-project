function fn(){
    console.log(`fn called`)
    console.log(this)
}
let fnVr = fn
console.log(fnVr)
fn()
fnVr()

let fnVr1 = function () {
    console.log(`fnvr1 called`)
}
console.log(fnVr1)
fnVr1()

let fnLmd = () => {
    console.log(`Lambda called`)
    console.log(this)
} //fat arrows
fnLmd()
