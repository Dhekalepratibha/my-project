let mbCnt=10

console.log(document.getElementById('dvMbs'))
let dvMbs = document.getElementById('dvMbs')
for(let i=0;i<mbCnt;i++){
    let ipMb=document.createElement('input')
    ipMb.type = 'number'
    ipMb.onmouseenter =function(){
        console.log('Entered')
        ipMb.style.background =magicColor()
    }
    dvMbs.appendChild(ipMb)
}
function magicColor(){

    let r =Math.random()*256
    let g =Math.random()*256
    let b =Math.random()*256

    return `rgb(${r}, ${g}, ${b})`
}
