////
//
Function.prototype.delay = function(ms) {
    var fn = this;
    return function() {
    setTimeout(fn, ms);
    };
};
   
var foo = function () {
   alert( "bingo!" ) 
}
   
function bar() {
   alert( "Wow!" ) 
}
   
   
   var fooDelayed = foo.delay(300);
   var barDelayed = bar.delay(600);
   
   fooDelayed();
   barDelayed(); 
   
