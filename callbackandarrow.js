var isEven = (e)=>{

    // if(e%2==0){

    //     return true;

    // }else {

    //     return false;

    // }

    return e % 2===0;
};

//console.log(isEven(4));
//passing reference of the function

// var result=[2,4,6].every(isEven);

// console.log(result);

var result=[2,4,6].every((e)=>{

    return e % 2===0;

});

 console.log(result);