function receivesAFunction(spy){
    return spy()
}
function returnsANamedFunction(fn){
    console.log("function")
    return fn()
}