var lco = {name:"Subha"}

//prototype-> used for defining objs like class in java
var User = function(firstName,courseCount){

    this.firstName=firstName;
    this.courseCount=courseCount;

    this.getCourseCount=function(){

        console.log(`Course count is : ${this.courseCount}`);

    }

};
//used for adding or injecting properties in the obj
User.prototype.getFirstNameWithCourse = function(){

    console.log(`your firstname is ${this.firstName} and course count is :${this.courseCount}`);

}

var subha = new User("Subhabrata",2);

if(subha.hasOwnProperty("firstNameee")){

    //subha.getFirstNameWithCourse();
    subha.getFirstName();
}


var sam = new User("sam ",3);

sam.getFirstNameWithCourse();

//other ways of creating objects

var User = {

    name:"",
    getUserName: function(){

        console.log(`UserName is ${this.name}`);

    }

}

var hitesh = Object.create(User);

hitesh.name="Subhabrata Banerjee";

hitesh.getUserName();


var bhai = Object.create(User,{

    name:{value:"sammy"},
    courseCount:{value:3}

});

