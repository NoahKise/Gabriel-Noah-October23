window.onload = function () {
  let form = document.querySelector("form#sentence");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const body = document.querySelector("body")

    const sentenceArray = [document.getElementById("inputSentence").value];

    const wordsArray = sentenceArray[0].split(" ");
    const longArray = [];
    wordsArray.forEach(function (word) {
      if (word.length > "2") {
        longArray.unshift(word);
      }
    })
    let results = document.createElement("p");
    results.append(longArray.join(" "));
    body.append(results);
  })
}