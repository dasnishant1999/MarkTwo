var readLineSync = require("readline-sync");

console.log("Hey there, Uzumaki Naruto speaking here,\nLet us start the quiz");

var score = 0;

var userName = readLineSync.question("Tell me your name?");

console.log(
  `Hey ${userName}, make sure that you have watched naruto and naruto shipuddin before taking the quiz:)`
);

function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer.toLowerCase() == answer.toLowerCase()) {
    console.log("You entered correct answer");
    score++;
  } else {
    console.log("You entered wrong answer");
  }

  console.log("Your current score is:" + score);
  console.log("------------------------");
}

var questions = [
  {
    question:
      " Which Hokage sealed the nine-tailed fox inside Naruto?\na)first hokage\nb)second hokage\nc)third hokage\nd)fourth hokage\n",
    answer: "d",
  },
  {
    question:
      " Who tricked Naruto into stealing a sacred scroll?\na)Iruka\nb)Zabuza\nc)Mizuki\nd)Shikamaru\n",
    answer: "c",
  },
  {
    question:
      "Which character can only use taijutsu?\na)Gaara\nb)Myself\nc)Rock Lee\nd)Neji\n",
    answer: "c",
  },
  {
    question:
      "Sasuke goal is gain enough power to kill whom?\na)Itachi uchiha\nb)Obito\nc)Myself\nd)Kakashi\n",
    answer: "a",
  },
  {
    question:
      "What does Chidori mean?\na)one thousand birds\nb)five thousand swords\nc) five hundred punches\nd)ten thousand stones\n",
    answer: "a",
  },
];

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log("Quiz Finished!");
console.log("Your final score is:" + score);
