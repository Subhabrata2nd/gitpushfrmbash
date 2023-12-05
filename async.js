var uno = ()=>{

    console.log("I am one ");

};

var dos =()=>{

setTimeout(() => {

    console.log("Wohoooo");
    
}, 3000);

console.log("I am two");

};

var tres = ()=>{

    console.log("I am three");

};

uno();
dos();
tres();