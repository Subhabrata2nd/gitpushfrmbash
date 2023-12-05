function init(){
    
    var firstName="Hitesh";

    function sayFirstName(){

        console.log(this.firstName);

    }

    sayFirstName();

}

init();

console.log(firstName);

//closure
