var User = {
    firstname :"Subhabrata",
    lastname:"banerjee",
    role:"Admin",
    logincount:32,
    loggedin:true,
    courseList:[],
    buyCourse: function(courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount:function(){

       return `${this.firstname} is enreolled in total of ${this.courseList.length}` ;

    }
    };
    
    var courselist = true;


// var addCourse=()=>{
// };
//all regular function call contains window


    User.buyCourse("React JS course");
    User.buyCourse("Angular JS course");
    console.warn(User.getCourseCount());
