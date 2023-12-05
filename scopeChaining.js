var name="Subha";

console.log(name);

function sayName(){

    var name = "H";

    console.log(name);

    sayName2();

    function sayName2(){

        console.log(name);

    }

}

sayName();