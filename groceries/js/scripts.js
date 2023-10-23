window.onload = function () {
  let form = document.querySelector("form#food6");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const body = document.querySelector("body")
    const item1 = (document.getElementById("input1").value).toUpperCase();
    const item2 = (document.getElementById("input2").value).toUpperCase();
    const item3 = (document.getElementById("input3").value).toUpperCase();
    const item4 = (document.getElementById("input4").value).toUpperCase();
    const item5 = (document.getElementById("input5").value).toUpperCase();
    const item6 = (document.getElementById("input6").value).toUpperCase();

    const listArray = [item1, item2, item3, item4, item5, item6];

    const sortedArray = listArray.sort();

    const h1 = document.createElement("h1");
    h1.append("Here's Your List");
    const ul = document.querySelector("ul#finalList");
    sortedArray.forEach(function (item) {
      const li = document.createElement("li");
      li.append(item);
      ul.append(li)
    });

    const inputForm = document.querySelector("div#startList");
    inputForm.remove();

    body.prepend(h1);

  })
}