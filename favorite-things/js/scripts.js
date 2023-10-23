window.onload = function () {
  let form = document.querySelector("form#question5");
  form.addEventListener("submit", function (event) {
    event.preventDefault();


    const body = document.querySelector("body")
    const answer1 = document.getElementById("input1").value;
    const answer2 = document.getElementById("input2").value;
    const answer3 = document.getElementById("input3").value;
    const answer4 = document.getElementById("input4").value;
    const answer5 = document.getElementById("input5").value;

    const answerArray = [answer1, answer2, answer3, answer4, answer5]

    const displayArray = [answerArray[1], answerArray[0], answerArray[2]]

    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.append(displayArray[0]);
    li2.append(displayArray[1]);
    li3.append(displayArray[2]);
    ul.append(li1, li2, li3);
    body.append(ul);
  })

}