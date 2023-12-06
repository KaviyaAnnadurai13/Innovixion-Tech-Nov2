const questions  = [
  {
    question: "What is the result of 2 + 5 * 3 in JavaScript?",
    options: ["21", "17", "22", "Error"],
    correctAnswer: "17"
  },
  {
    question: "Which method is used to find the index of a given element in an array in JavaScript?",
    options: [".indexOf()", ".findIndex()", ".search()", ".getIndex()"],
    correctAnswer: ".indexOf()"
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: ["Current function", "Global object", "Parent object", "Current object"],
    correctAnswer: "Current object"
  },
  {
    question: "Which function is used to execute a function after a specified number of milliseconds in JavaScript?",
    options: ["setTimeout()", "setInterval()", "timeDelay()", "wait()"],
    correctAnswer: "setTimeout()"
  },
  {
    question: "What is the result of 10 === '10' in JavaScript?",
    options: ["true", "false", "Error", "NaN"],
    correctAnswer: "false"
  },
  {
    question: "Which event is triggered when a form is submitted in HTML?",
    options: ["onSubmit", "onClick", "onFormSubmit", "onSubmitForm"],
    correctAnswer: "onSubmit"
  },
  {
    question: "What is the purpose of the 'addEventListener' method in JavaScript?",
    options: ["To remove an event listener", "To add a new event listener", "To execute an event listener immediately", "To check for an event listener"],
    correctAnswer: "To add a new event listener"
  },
  {
    question: "Which operator is used to combine two or more strings in JavaScript?",
    options: ["+", "&", "-", "%"],
    correctAnswer: "+"
  },
  {
    question: "What is the result of typeof null in JavaScript?",
    options: ["'object'", "'null'", "'undefined'", "'string'"],
    correctAnswer: "'object'"
  },
  {
    question: "Which method is used to sort elements in an array in JavaScript?",
    options: [".sort()", ".order()", ".arrange()", ".organize()"],
    correctAnswer: ".sort()"
  },
  {
    question: "What is the output of console.log(3 === '3') in JavaScript?",
    options: ["true", "false", "Error", "NaN"],
    correctAnswer: "false"
  },
  {
    question: "Which function is used to convert a string to uppercase in JavaScript?",
    options: [".toUpperCase()", ".toUpper()", ".upperCase()", ".upper()"],
    correctAnswer: ".toUpperCase()"
  },
  {
    question: "In CSS, which property is used to set the background color of an element?",
    options: ["color", "background-color", "bgcolor", "background-style"],
    correctAnswer: "background-color"
  },
  {
    question: "What is the result of 0.1 + 0.2 in JavaScript?",
    options: ["0.3", "0.30000000000000004", "0.2", "Error"],
    correctAnswer: "0.30000000000000004"
  },
  {
    question: "Which method is used to remove the last element from an array in JavaScript?",
    options: [".pop()", ".shift()", ".slice()", ".removeLast()"],
    correctAnswer: ".pop()"
  },
  {
    question: "What is the purpose of the 'innerHTML' property in JavaScript?",
    options: ["To get the HTML content of an element", "To set the HTML content of an element", "To delete an element", "To hide an element"],
    correctAnswer: "To set the HTML content of an element"
  },
  {
    question: "Which statement is used to exit a loop in JavaScript?",
    options: ["break", "return", "exit", "end"],
    correctAnswer: "break"
  },
  {
    question: "What does the 'NaN' keyword represent in JavaScript?",
    options: ["Not a Number", "No assigned value", "Null", "Negative Number"],
    correctAnswer: "Not a Number"
  },
  {
    question: "Which CSS property is used to create space between the element's border and inner content?",
    options: ["padding", "margin", "spacing", "gap"],
    correctAnswer: "padding"
  },
  {
    question: "What is the output of console.log(!!'hello') in JavaScript?",
    options: ["'hello'", "false", "true", "Error"],
    correctAnswer: "true"
  }
];

     
let Question = document.querySelector(".Questions");
let Options = document.querySelector(".option");
let Score = document.querySelector(".Score");
let questionIndex = 0;
let questionNo = 0;
let quesobj ;
let result= document.querySelector(".result");
let score= 0;
let Nextbtn = document.getElementById("nextbtn");
function start(questionIndex){
   Nextbtn.style.display="none"
   quesobj = questions[questionIndex];
   console.log(quesobj);

   Question.textContent = (questionNo + 1)+". "+ quesobj.question;

   quesobj.options.forEach((opt,index) => {
   const  Divelement= document.createElement("div");
   Divelement.className = "option";
   Divelement.textContent = opt;
   console.log(opt);
   Divelement.addEventListener("click",()=>{
    click(index,Divelement);
    console.log(Divelement);
   });
   Options.appendChild(Divelement);
  });
}
function click(index,Divelement){
  let yourans = quesobj.options[index];
  check(yourans,Divelement)
}
function check(yourans,Divelement){
   if (quesobj.correctAnswer == yourans) {
   result.innerHTML="correct Answer😍,You are Great!";
   Divelement.style.backgroundColor="green";
   score ++;
   } else {
    result.innerHTML="Incorrect Answer😢"+ `<br>` + "Correct Answer"+ ":" + quesobj.correctAnswer;
    Divelement.style.backgroundColor="red";

   }
   if(questionIndex < questions.length -1){
    console.log(questionIndex);
    console.log(questions.length)
    setTimeout(()=>{
      Nextbtn.style.display="block"
    },1000);
  }
  else{
    setTimeout(() => {
      result.textContent="Quiz Completed";
      Score.innerHTML= "Score:"+ " "+score + "/" + questions.length;
    }, 3000);

  }
}

function next(){
  questionIndex += 1;
  questionNo += 1;
  Options.innerHTML="";
  result.innerHTML="";
  start(questionIndex);
  
}
start(questionIndex);