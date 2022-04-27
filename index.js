function receivesAFunction(cb) {
    return cb()
}
receivesAFunction(function () { return "spy" });


const returnsANamedFunction = (fn) => {
    fn = returnsANamedFunction
    return fn
}

function returnsAnAnonymousFunction() {
    return (function () { })
}