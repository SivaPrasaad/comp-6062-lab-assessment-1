let myFullName= 'Siva Prasaad Padmakumar';
let myStudentNumber= 1234139;
let result=`${myFullName} - ${myStudentNumber}`;

console.log(result);

let primaryHeadingContent=document.querySelector("h1");

primaryHeadingContent.innerHTML=`${myFullName} - ${myStudentNumber}`;

primaryHeadingContent.classList.add("primaryHeading");
