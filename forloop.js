// for(let i=0;i<10;i++){
// console.log(i);
// }

const myStates=["WestBenagal",2,"Delhi","Telengana","AndraPradesh"];

for(let i=0;i<myStates.length;i++){

if(typeof(myStates[i])!=="string") continue;

console.log(myStates[i]);

}

let i=0;
while(i<myStates.length){

console.log(myStates[i]);

i++;

}

do{
console.log(i);

i++;

}while(i<10)