const { reject } = require("async");

var uno = ()=>{

    return "I am one ";

};

// var dos =()=>{

// setTimeout(() => {

//     return "I am two";
    
// }, 3000);



// };

var dos =()=>{

    return new Promise((resolve,reject)=>{

            setTimeout(() => {
            
               // resolve("I got that");

               reject("I am two was not found , thus rejected");
                
            }, 3000);
            
    });
    
    };

var tres = ()=>{

    return "I am three";

};

const callme= async()=>{

let valOne= uno();

console.log(valOne);

try{
    let valTwo= await dos();

    console.log(valTwo);
    
}catch(error){

console.error(error);

}

let valThree= tres();

console.log(valThree);

}


callme();
