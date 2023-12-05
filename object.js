var lco = {name:"Subha"}

//prototype-> used for defining objs like class in java
var User = function(firstName,courseCount){

    this.firstName=firstName;
    this.courseCount=courseCount;

    this.getCourseCount=function(){

        console.log(`Course count is : ${this.courseCount}`);

    }

    this.getFirstName=function(){

        console.log(`first name is : ${this.firstName}`);

    }

};

User.prototype.getFirstNameWithCourse = function(){

    console.log(`your firstname is ${this.firstName} and course count is :${this.courseCount}`);

}

var subha = new User("Subhabrata",2);

//subha.getCourseCount();

//subha.getFirstName();

subha.getFirstNameWithCourse();



//console.log(subha);

var sam = new User("sam ",3);

//sam.getCourseCount();
//console.log(sam);

sam.getFirstNameWithCourse();