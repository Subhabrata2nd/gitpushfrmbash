class User{

    // name="";
    // email="";

    constructor(name,email){

        this.name=name;
        this.email=email;
    }

    #courseList=[];

    getInfo(){

        return { name:this.name, email:this.email};

    }

    enrollcourse(name){

        this.#courseList.push(name);

    }

    getCourseList(){

        return this.#courseList;

    }

    static login(){

        return "you are logged in";

    }

}

class subAdmin extends User{

    constructor(name,email){

        super(name,email);

    }

    getAdminInfo(){

        return " I am sub-admin";

    }

    login(){

        return "login for admin only";

    }

}


const tom = new subAdmin("Tom buttlicker" , "tom@yahoo.com");

console.log(tom.getAdminInfo());

console.log(tom.getInfo());

console.log(tom.login());

module.exports = User;