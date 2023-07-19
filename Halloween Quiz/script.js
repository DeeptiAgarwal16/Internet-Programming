const quizDB = [
{
question: "Q1. When does Halloween fall?",
a: "30th September",
b: "30th November", 
c: "31st October", 
d: "31st December",
ans: "ans3"
},
{
question: "Q2. Which fruit would you traditionally bob for at Halloween parties?",
a: "Grapes", 
b: "Mangoes", 
c: "Pineapple", 
d: "Apples",
ans: "ans4"
},
{
question: "Q3. Which large fruit do you carve to make a Jack-o-Lantern?",
a: "Watermelon", 
b: "Guava", 
c: "Pumpkin",
d: "Apple",
ans: "ans3"
},
{
question: "Q4. What do you put inside a pumpkin once carved?",
a: "Bulb",
b: "Candle",
c: "Lantern",
d: "Lamp",
ans: "ans2"
},
{
question: "Q5. Which insect, popular at Halloween parties has 8 legs?",
a: "Spider",
b: "Caterpillar", 
c: "Fly",
d: "Ladybird",
ans: "ans1"
},
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
const questionList = quizDB[questionCount];
question.innerText = questionList.question;
option1.innerText = questionList.a;
option2.innerText = questionList.b;
option3.innerText = questionList.c;
option4.innerText = questionList.d;
}

    loadQuestion();

const getCheckedAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click' , () => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h2> Your Score : ${score}/${quizDB.length} </h2>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
    }

});






