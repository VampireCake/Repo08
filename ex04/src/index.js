var myGlobalVariable=10;
function function1(){
  var myLocalVariable=5;
}
function function2(){
    var result=" ";
    if (typeof myGlobalVariable != "undefined"){
        result += "myGlobarVariable: " + myGlobalVariable;
    }
    if (typeof myLocalVariable != "undefined"){
        result += "myLocalVariable: " + myLocalVariable;
    }
    console.log(result);
}

function1();
function2();