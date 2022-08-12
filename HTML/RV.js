// const listitems = document
//   .querySelector("ul")
//   .getElementsByClassName("list-group-item");
// console.log(listitems);

// let arritems = Array.from(listitems);
// console.log(arritems);

// arritems.forEach((arritem, idx) => {
//   arritem.innerText = `${idx} : Hello`;
// });

// let itms = document.querySelectorAll(" ul.list-group li.list-group-item");

// itms.forEach((itm, idx) => {
//   console.log((itm.innerText = `${idx} : Hello World`));
// });
// console.log(itms);
let chl;
const getul = document.querySelector("ul.list-group");
console.log(getul);

const getli = document.querySelector("li.list-group-item");
console.log(getli);

// chl = getul.children;
// console.log(chl);
// console.log(chl[3]);

// chl = getul.children[1].children;
// chl = getul.firstElementChild;
// chl = getul.lastElementChild;
// chl = getul.children.length;
// chl = getul.childElementCount;

const getfirstli = document.querySelector("li.list-group-item:first-child");
console.log(getfirstli);

// let par = getfirstli.parentElement;
// console.log(par);

// const getpar = document.querySelector("li.list-group-item:parentElement");
// console.log(getpar);

const sbl = getfirstli.nextElementSibling;
// console.log(sbl);

// console.log(chl);

// const newli = document.createElement("li");

// newli.appendChild(document.createTextNode("Save Myanmar"));

// console.log(newli);

// document.querySelector("ul.list-group").appendChild(newli);

// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   // console.log("hay i'm working ");

//   const getnewtask = document.getElementById("task").value;
//   // console.log(getnewtask);

//   // localStorage.setItem("mytask", getnewtask);
//   let alltasks;

//   if (localStorage.getItem("mytasks") === null) {
//     alltasks = [];
//   } else {
//     alltasks = JSON.parse(localStorage.getItem("mytasks"));
//   }
//   //[have to eat]

//   alltasks.push(getnewtask);

//   //[have to cook]

//   localStorage.setItem("mytasks", JSON.stringify(alltasks));

//   console.log(alltasks);

//   //   e.preventDefault();
// });

// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   // console.log("hay I'm working");

//   const getnewtask = document.getElementById("task").value;

//   // console.log(getnewtask);

//   // localStorage.setItem("mytask", getnewtask);

//   let alltasks;

//   if (localStorage.getItem("mytasks") === null) {
//     alltasks = [];
//   } else {
//     alltasks = JSON.parse(localStorage.getItem("mytasks"));
//   }

//   alltasks.push(getnewtask);

//   localStorage.setItem("mytasks", JSON.stringify(alltasks));

//   console.log(alltasks);
// });

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const gettasks = document.getElementById("task").value;

  let alltasks;

  if (localStorage.getItem("mytasks") === null) {
    alltasks = [];
  } else {
    alltasks = JSON.parse(localStorage.getItem("mytasks"));
  }

  alltasks.push(gettasks);

  localStorage.setItem("mytasks", JSON.stringify(alltasks));

  console.log(alltasks);
});
