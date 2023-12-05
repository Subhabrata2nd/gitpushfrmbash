

function sayhello(name){


console.log("hello there "+ name);

console.log(`Hello there ,${name}. How are you`);
}


sayhello("Subhabrata Banerjee");


function namstay(){


    return "Hello in India";


}

var greet = namstay();

console.log(greet);


function getUserRole(names,role){

switch(role){

case "admin":

    return `${names} is admin with all access`;

case "others":

    return `${names} others with many role`;

    default:
        return "anything else";

}


}


console.log(getUserRole("subhankar","admin"));