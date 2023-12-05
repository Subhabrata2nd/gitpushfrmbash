const courses = [

    {
        name:"Complete react js course",
        price:"22.3"
    },{
        name:"Complete angular js course",
        price:"5.3"
    },{
        name:"Complete spring boot  course",
        price:"22"
    },
    {
        name:"Complete core java course",
        price:"222"
    }

]

function generateList(){

    const ul=document.querySelector(".unordered");
    ul.innerHTML="";

courses.forEach((course)=>{

{/* <ul class="list-group">

<li class="list-group-item" >
    JavaScript course 
    <span class="float-right">
        $2.1>
    </span>
</li>

</ul> */}
const li = document.createElement("li");
li.classList.add("list-group-item");

const name=document.createTextNode(course.name);

li.appendChild(name);

const span = document.createElement("span");
span.classList.add("float-right");
const price = document.createTextNode("$" +course.price);
span.appendChild(price);
li.appendChild(span);
ul.appendChild(li);
});


}

//generateList()

window.addEventListener("load",generateList);

const button = document.querySelector(".sort-btn");

button.addEventListener("click",()=>{

    courses.sort((a,b)=>   a.price-b.price)

    generateList();

});