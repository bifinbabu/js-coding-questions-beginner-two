// var globs = "outetrvar"

(function outerfunction (outerarg) {
    var oterfunvar = 'x'
    (function innerfunction (innerarg) {
        var innerfunvar = "y"
        console.log(
            // "glob: " + globs +
            "outerarg: " + outerarg +
            "innerarg: " + innerarg +
            "outetrfunvar: " + oterfunvar +
            "innerfunvar: " + innerfunvar

        )
    })(5)
})(7)

var globalVar = "abc";

// Parent self invoking function
(function outerFunction (outerArg) { // begin of scope outerFunction
  // Variable declared in outerFunction function scope
  var outerFuncVar = 'x';    
  // Closure self-invoking function
  (function innerFunction (innerArg) { // begin of scope innerFunction (Self invoking)
    // variable declared in innerFunction function scope
    var innerFuncVar = "y";
    console.log(         
      "outerArg = " + outerArg + "\n" +
      "outerFuncVar = " + outerFuncVar + "\n" +
      "innerArg = " + innerArg + "\n" +
      "innerFuncVar = " + innerFuncVar + "\n" +
      "globalVar = " + globalVar);
  // end of scope innerFunction
  })(5); // Pass 5 as parameter
// end of scope outerFunction
})(7); // Pass 7 as pa