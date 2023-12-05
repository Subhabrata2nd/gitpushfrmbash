const myStates=["WestBenagal",2,"Delhi","Telengana","AndraPradesh"];

// for(let i=0;i<myStates.length;i++){

// if(typeof(myStates[i])!=="string") continue;

// console.log(myStates[i]);

// }

let i=0;
myStates.forEach((e)=>(console.log(e)));

const names=["youtube","facebook","instagram","Netflix"];

// names.forEach((e)=>(console.log(e)));

for(const n of names){

    console.log(n);

}

const symbols ={
    yt:"youtube",
    ig:"Isntagram"
}

for(const n in symbols){

        console.log(`${n} the full form is ${symbols[n]}`);

}