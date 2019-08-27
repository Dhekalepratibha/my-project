function fnRtn(){
    console.log(`fnrRtn called`)
    function inFn(){
        console.log(`Inner function`)
    }
    return inFn
}