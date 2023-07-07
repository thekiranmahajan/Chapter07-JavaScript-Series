//Chapter 07: Walking the DOM
console.log("console.log(document);");
console.log(document);
console.log("console.log(document.body);");
console.log(document.body);
console.log("console.log(document.documentElement);");
console.log(document.documentElement);
console.log("console.log(document.head);");
console.log(document.head);
console.log("console.log(document.body.firstChild);");
console.log(document.body.firstChild); //text node coz there is space which count as text node
console.log("console.log(document.body.lastChild);");
console.log(document.body.lastChild); // script tag is last child in this case
console.log("console.log(document.body.childNodes);");
console.log(document.body.childNodes); // all body childNodes in a HTML collection
console.log("console.log(Array.from(document.body.childNodes));");
console.log(Array.from(document.body.childNodes)); // all body childNodes in an array
let a = Array.from(document.body.childNodes);
console.log(a.length); // 4
console.log(a.pop()); // removes last element

console.log("console.log(document.documentElement.parentNode);");
console.log(document.documentElement.parentNode); // parentNode of html--#document which is not a Element
console.log("console.log(document.documentElement.parentElement);");
console.log(document.documentElement.parentElement); // returns null coz there is no parentElement of HTML

// Element only Navigation
console.log("console.log(document.head.nextElementSibling);");
console.log(document.head.nextElementSibling); // next or right ElementSibling of head
console.log("console.log(document.body.firstElementChild);");
console.log(document.body.firstElementChild); // first ElementChild of body
console.log("console.log(document.body.lastElementChild);");
console.log(document.body.lastElementChild); // last ElementChild of body
let t =
  document.body.firstElementChild.lastElementChild.previousElementSibling
    .firstElementChild.firstElementChild.nextElementSibling;

console.log(t.rows); // collection of tr elements
console.log(t.caption); // reference to <caption>
console.log(t.tHead); // reference to <thead>
console.log(t.tfoot); // reference to <tfoot>
console.log(t.tBodies); // reference to <tbody> elements
console.log(t.rows[1].cells); // collection of td and th
console.log(t.rows[1].sectionRowIndex); // tr's index inside enclosing element
console.log(t.rows[1].rowIndex); // row number starting from 1
console.log(t.rows[1].cells[2].cellIndex); // no. cells inside enclosing <tr>

console.log(
  "typeof document :",
  typeof document,
  "\ntypeof window :",
  typeof window
);

//searching the DOM: my fav😍
console.log(document.getElementById("card1")); // using id
console.log(document.querySelectorAll(".cards")); // using all CSS selectors
console.log(document.querySelector(".cards")); // first[0] with selectors
console.log(document.getElementsByTagName("div")); // by tag name
console.log(document.getElementsByClassName("card")); // by className
console.log(document.getElementsByName("aNameOfHeader")); // by name attribute

// matches, closest and contains methods:
let m = document.body.firstElementChild.firstElementChild;
let n = document.body.firstElementChild.firstElementChild.lastElementChild;
console.log(m.matches(".firstheader")); // returns true if give CSS selector matches the element or returns false
console.log(m.closest(".container")); // finds closest ancestor(including itself) using CSS selectors and returns it
console.log(m.contains(n)); // returns true if elementA contains elementB or returns false

// Practice Set 07:
// Q.01
let TuberInfo = (document.getElementsByTagName(
  "nav"
)[0].firstElementChild.style.color = "red");

// Q.02
// view page source shows exact sources. without autocorrect
// inspect shows running sources with autocorrections

// Q.03
let firstAchorTag = (document.getElementsByTagName(
  "ul"
)[0].firstElementChild.firstElementChild.style.color = "green");

let lastAchorTag = (document.getElementsByTagName(
  "ul"
)[0].lastElementChild.firstElementChild.style.color = "green");

// Q.04
let liTags = Array.from(document.getElementsByTagName("li")).forEach((li) => {
  li.style.backgroundColor = "cyan";
});

// Q.05
// there is no method to check farthest ancestor that matches a given CSS selector ans: d) none of these
