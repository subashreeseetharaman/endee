// Simple AI FAQ Bot using basic vector-like search (Beginner Friendly)

const readline = require("readline");

// 📚 Simple Dataset
const data = [
  { question: "What is AI?", answer: "AI stands for Artificial Intelligence." },
  { question: "What is ML?", answer: "ML stands for Machine Learning." },
  { question: "What is Endee?", answer: "Endee is a vector database for AI applications." },
  { question: "What is Java?", answer: "Java is a programming language." },
  { question: "What is Python?", answer: "Python is an easy programming language." }
];

// 🔍 Simple similarity (matching words)
function findBestMatch(input) {
  input = input.toLowerCase();

  let bestScore = 0;
  let bestAnswer = "Sorry, I don't know that.";

  data.forEach(item => {
    let score = 0;
    let words = item.question.toLowerCase().split(" ");

    words.forEach(word => {
      if (input.includes(word)) score++;
    });

    if (score > bestScore) {
      bestScore = score;
      bestAnswer = item.answer;
    }
  });

  return bestAnswer;
}

// 💬 Chat Interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("🤖 Simple AI Bot (Type 'exit' to quit)");

function chat() {
  rl.question("You: ", (input) => {
    if (input.toLowerCase() === "exit") {
      rl.close();
      return;
    }

    const response = findBestMatch(input);
    console.log("Bot:", response);

    chat();
  });
}

chat();
