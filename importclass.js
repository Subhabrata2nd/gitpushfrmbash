// import User from "./classObj.js";

const User = require("./classObj.js");

const subha = new User("Subhabrata","subhabrata1049@gmail.com");

console.log(subha.getInfo());

subha.enrollcourse("React Js");
let courses =subha.getCourseList();

courses.forEach((e)=>console.log(e));
console.log(subha.courses);//accessing private variable