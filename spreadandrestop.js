// var val = Math.max(2,4,6,73,23);
// console.log(val);

// var myObj={};

// Object.assign(myObj,{a:1,b:2,c:3},{x:9,y:10});

// console.log(myObj);

function sumOne(a,b){

    return a + b;

}

var myA=[5,4];

//console.log(sumOne(...myA));//spread operator -> takes the array then seperates the values

function sumTwo(...args){//rest operator individaul value to array

    let sum=0;

    for(const arg of args){

        sum=sum+arg;

    }
        return sum;
}

console.log(sumTwo(2,3,4,5,6,7));