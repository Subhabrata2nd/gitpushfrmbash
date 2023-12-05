var myMap = new Map();

myMap.set(0,"first");
myMap.set(1,"2nd");
myMap.set(2,"3rd");
myMap.set(3,"4th");

console.log(myMap);

for(let [key,value] of myMap){

    console.log(`Key is :${key} and value is ${value}`);

}

myMap.forEach((v,k)=> console.log(`${v}` +"and key is "+ `${k}`));