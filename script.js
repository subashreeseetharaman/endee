async function getAnswer() {
    let question = document.getElementById("question").value.toLowerCase();
    let response = "Sorry, I don't know the answer.";

    let data = await fetch("data/notes.json");
    let notes = await data.json();

    for (let i = 0; i < notes.length; i++) {
        if (question.includes(notes[i].keyword)) {
            response = notes[i].answer;
            break;
        }
    }

    document.getElementById("answerBox").innerText = response;
}