window.onload = function (event) {
  event.preventDefault();


  const flavorsArray = ["chocolate", "vanilla", "strawberry"];

  const body = document.querySelector("body")
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");

  li1.append(flavorsArray[0]);
  li2.append(flavorsArray[1]);
  li3.append(flavorsArray[2]);
  ul.append(li1, li2, li3);

  body.append(ul)

}