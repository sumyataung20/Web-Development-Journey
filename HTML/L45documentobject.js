let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

val = document.links;
val = document.links[0];
val = document.links[3];
val = document.links[3].id;
val = document.links[3].className;
val = document.links[3].classList;
val = document.links[3].classList[0];
val = document.links[3].classList[1];

val = document.forms;

val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].action;
val = document.forms[0].method;

val = document.images[0].id;
val = document.images[0].className;

val = document.scripts;
val = document.scripts[0];
// val = document.scripts[0].src;
// val = document.scripts[0].type;
// val = document.scripts[0].getAttribute("src");
// val = document.scripts[0].getAttribute("type");

// console.log(val);

document.getElementById("tasktitle").style.backgroundColor = "green";
document.getElementById("tasktitle").style.color = "#fff";
document.getElementById("tasktitle").style.padding = "5px";

// document.getElementById("tasktitle").textContent = "My List";
// document.getElementById("tasktitle").innerText = "My Tasks";
document.getElementById("tasktitle").innerHTML =
  "<span stype='color : blue'>My Jobs</span>";
//call by class name
let lis = document.getElementsByClassName("list-group-item");

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = "blue";
// lis[1].textContent = "Have to visit";

//call by tag name

let litags = document.getElementsByTagName("li");
// console.log(litags);
// console.log(litags[3]);

//querySelector
// console.log(document.querySelector("tasktitles"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h3"));
//change styling
// console.log(document.querySelector("li"));
// document.querySelector("li").style.color = "red";
// document.querySelector("ul li").style.color = "blue";
// document.querySelector("ul li:nth-child(odd)").style.background = "silver";
// document.querySelector("ul li:nth-child(even)").style.background = "silver";
// document.querySelector("ul li:last-of-type").style.color = "green";
// document.querySelector("ul li:nth-of-type(3)").textContent = "Have to read";

// console.log(val);

// const listitems = document

//   .querySelector("ul")
//   .querySelector(".list-group-item");

// console.log(listitems);

// const listitems = document
//   .querySelector("ul")
//   .getElementsByClassName("list-group-item"); //HTML collection
// console.log(listitems);
// console.log(listitems[3]);
// console.log(typeof listitems);

// let arritems = Array.from(listitems);
// console.log(arritems);

// arritems.forEach(function (arritem, idx) {
//   arritem.innerText = `${idx} : Hello`;
// });

// let its = document.querySelector("ul.list-group li.list-group-item");
// console.log(its);

// let itms = document.querySelectorAll("ul.list-group li.list-group-item");
// console.log(itms);
//nodelist

// console.log(itms[3]);

// itms.forEach(function (itm, idx) {
//   console.log((itm.innerText = ` ${idx} : Hello World`));
// });

let chl;

// const getul = document.querySelector("ul.list-group");
// console.log(getul);

// const getli = document.querySelector("li.list-group-item:first-child");
// console.log(getli);

// chl = getul.children;
// console.log(chl);
// console.log(chl[3]);

// getul.children[1].innerText = "have to Eat";
// getul.children[1].innerHTML = `Have tp read <a href="#" id="delete-item2" class="delete-item"><i class="far fa-trash-alt"></i></a>`;

// chl = getul.children;
// chl = getul.children[1].children;
// chl = getul.children[1].children[0];
// chl = getul.children[1].children[0].id;
// chl = getul.children[1].children[0].className;
// chl = getul.children[1].children[0].classList;
// chl = getul.children[1].children[0].href;
// chl = getul.children[1].children[0].getAttribute("href");

// console.log(chl);

//first element child
// chl = getul.firstElementChild;
// console.log(chl);

// chl = getul.lastElementChild;
// console.log(chl);

//child element count

// chl = getul.children.length;
// chl = getul.childElementCount;

// chl = getul.children[0].childElementCount;
// chl = getul.children[0].children[0].childElementCount;
// console.log(chl);

// const getfirstli = document.querySelector("li.list-group-item:first-child");
// console.log(getfirstli);

// let par = getfirstli.parentElement;
// console.log(par);

//next element sibling

// let sbl = getfirstli.nextElementSibling;

// sbl = getfirstli.nextElementSibling.nextElementSibling;

// sbl =
//   getfirstli.nextElementSibling.nextElementSibling.nextElementSibling
//     .nextElementSibling;

// console.log(sbl);

// let psbl =
//   getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
// console.log(psbl);

//create new element
const newli = document.createElement("li");

//add id

newli.id = "new-item";

//Add Class
// newli.className = "list-group-item";
// newli.className = "delete-me";

newli.className = "list-group-item delete-me";
newli.classList.add("delete-i", "hide-me");

//Add Attribute = setAttribute(qulifiedName , value);
newli.setAttribute("title", "newitem");

//Create Text Node

newli.appendChild(document.createTextNode("Save Myanmar"));

// console.log(newli);

const newlink = document.createElement("a");

newlink.href = "#";

newlink.id = "delete-item6";

newlink.classList.add("delete-item");

// console.log(newlink);

newlink.innerHTML = `<i class="far fa-trash-alt"></i>`;

// console.log(newlink);

// newli.appendChild(newlink);

document.querySelector("ul.list-group").appendChild(newli);

//Replace Element

const newtitleh2 = document.createElement("h2");

newtitleh2.id = "tasktitle";

var newcaption = document.createTextNode("All My Lista");
newtitleh2.appendChild(newcaption);

// console.log(newtitleh2);

const oldtitleh4 = document.getElementById("tasktitle");

//replaceChild(new,old)

const getcardaction = document.querySelector(".card-action");

getcardaction.replaceChild(newtitleh2, oldtitleh4);

//Remove Element self

const getlis = document.querySelectorAll("li"); //node list
// console.log(getlis);

// getlis[0].remove();
// getlis[5].remove();

//Remove child Element
const getfirstul = document.querySelector("ul");

// getfirstul.removeChild(getlis[0]);
// getfirstul.removeChild(getlis[4]);

//className vs classlist

const firstli = document.querySelector("li:first-child");
// console.log(firstli);
// console.log(firstli.children);
// console.log(firstli.children[0]);
let firstlink;

firstlink = firstli.children[0];
// console.log(firstli.children[0].className);

//a
// firstlink.className = "delete-myself";
// firstlink.className = "delete-item delete-myself";
// firstlink.className = "delete-item delete-me delete-myself";

// firstlink.classList.add("delete-ourselves");

//remove class name

// firstlink.className = "delete-item delete-me delete-myself delete-ourselves"
// firstlink.className = "delete-item delete-me"

// firstlink.classList.remove("delete-myself");
// firstlink.classList.remove("delete-myself", "delete-ourselves");

//replace(old,new)

// firstlink.className = "delete-item delete-myself";

// firstlink.classList.replace("delete-me","delete-myself")

// if (firstlink.classList.contains("delete-me")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// if (firstlink.className === "delete-item delete-me") {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// console.log(firstlink.className);

//Attribute

let getatt = firstlink.href;

getatt = firstlink.getAttribute("href");
// console.log(getatt);

firstlink.setAttribute("href", "https://google.com");

getatt = firstlink.hasAttribute("href");
// console.log(getatt); //true

getatt = firstlink.hasAttribute("title");
// console.log(getatt); //false

//addEventListener(eventtype,function)

// const clearbtn = document.querySelector(".clear-tasks");

// //Method1

// clearbtn.addEventListener("click", function (e) {
// console.log("hay i m working");

// console.log(e);
// console.log(e.target);
// console.log(this);
// e.preventDefault();
// });

//Method2

// clearbtn.addEventListener("click", myclick);

// function myclick(e) {
//   let val;

// val = e.target.className;
// val = e.target.classList;
// val = e.target.id;

// console.log(val);

// e.target.innerText = "Finished";

// val = e.type;
//coordinates event - relative to the window
// val = e.clientX;
// val = e.clientY;

//coordinates event - relative to the element
// val = e.offsetX;
// val = e.offsetY;

// console.log(val);
// }

//mouseevent

const clbtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const cardactionarea = document.querySelector(".card-action");
const headingh2 = document.querySelector("h2");
//single click

// clbtn.addEventListener("dblclick", mouseeventtype);

// clbtn.addEventListener("mousedown", mouseeventtype);

// clbtn.addEventListener("mouseup", mouseeventtype);

// clbtn.addEventListener("mouseenter", mouseeventtype);

// clbtn.addEventListener("mouseover", mouseeventtype);

// cardactionarea.addEventListener("mouseout", mouseeventtype);

cardactionarea.addEventListener("mouseleave", mouseeventtype);

// card.addEventListener("mousemove", mouseeventtype);

function mouseeventtype(e) {
  console.log(`Event type = ${e.type}`);

  headingh2.textContent = `MouseX : ${e.offsetX} MouseY:${e.offsetY}`;

  document.body.style.background = `rgba(${e.offsetX} , ${e.offsetY},1)`;
}

const formel = document.querySelector("form");

formel.addEventListener("submit", inputeventtype);

function inputeventtype(e) {
  console.log(`Event Type = ${e.type}`);

  e.preventDefault();
}

const inputtask = document.getElementById("task");

const getH2 = document.querySelector("h2");

// inputtask.addEventListener("keydown", inputeventype);
// inputtask.addEventListener("keypress", inputeventype);
// inputtask.addEventListener("keyup", inputeventtype);
// inputtask.addEventListener("input", inputeventtype);
// inputtask.addEventListener("focus", inputeventtype);
// inputtask.addEventListener("blur", inputeventtype);
// inputtask.addEventListener("cut", inputeventtype);
// inputtask.addEventListener("paste", inputeventtype);

function inputeventype(e) {
  console.log(`Event Type = ${e.type}`);

  // console.log(inputtask.value);
  // getH2.textContent = inputtask.value;

  console.log(e.target.value);
  getH2.innerText = e.target.value;
}

//event bubbling

// document.querySelector(".card-title").addEventListener("click", function () {
//   console.log("i m card-title");
// });
// document.querySelector(".card-content").addEventListener("click", function () {
//   console.log("i m card-content");
// });

// document.querySelector(".card").addEventListener("click", function () {
//   console.log("i m card");
// });

//event delegation

// const deleitem = document.querySelector(".delete-item");

// deleitem.addEventListener("click", deleteitem);

// function deleteitem(e) {
//   console.log("I am delete item");

//   console.log(e.target);

//   e.preventDefault();
// }

document.body.addEventListener("click", evendeleg);

function evendeleg(e) {
  // console.log(e.target);

  // if (e.target.className === "far fa-trash-alt") {
  //   console.log("hay i am trash can");
  // }

  // if (e.target.parentElement.className === "delete") {
  //   console.log("hay i am delete item by a tag");
  // }

  // if (e.target.parentElement.className === "delete-item delete-me") {
  //   console.log("hey i am delete item by a tag");
  // }

  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.remove();

    // e.target.parentElement.remove();

    // e.target.parentElement.parentElement.remove();
  }

  e.preventDefault();
}
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const getnewtask = document.getElementById("task").value;
  // console.log(getnewtask);

  // localStorage.setItem("mytasks", "getnewtask");

  let alltasks;

  if (localStorage.getItem("mytasks") === null) {
    alltasks = [];
  } else {
    alltasks = JSON.parse(localStorage.getItem("mytasks"));
  }

  alltasks.push(getnewtask);

  localStorage.setItem("mytasks", JSON.stringify(alltasks));

  console.log(alltasks);
});
