function receivesAFunction(callback) {
    callback ();
}
function returnsANamedFunction() {
    return function namedFunction() {
      console.log("hello");
    };
}
function returnsAnAnonymousFunction () {
    return function () {
        console.log ('anonymous Fn');
    }
}
