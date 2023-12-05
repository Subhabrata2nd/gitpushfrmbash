const sup={
    firstName:"Subhabrata",
    lastName:"Banjee",
    role:"yolo",
    courseCount:"34",
    getInfo:function(){
        console.log(`The name is ${this.firstName} and the role is:${this.role} , he is enrolled in ${this.courseCount}`);
    }
};


const dj={
    firstName:"Rock",
    lastName:"DJ",
    role:"sub-admin",
    courseCount:32,
};
//this will now point to dj not sup
var info=sup.getInfo.bind(dj);
info();

//bind gives you an reference while call gives you output




