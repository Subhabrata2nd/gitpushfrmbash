//closure
function init(){
    
    var firstName="Hitesh";

    function sayFirstName(){

        console.log(firstName);

    }   

        return sayFirstName;

}

var value=init();

value();

function doAdd(x){

    return function(y){

        return x+y;

    };

}

var add5=doAdd(122);//curring 

console.log(doAdd(222)(222)+" "+add5(5));




