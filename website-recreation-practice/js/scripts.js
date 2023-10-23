window.onload = function (event) {
    event.preventDefault();
    let startingH1 = document.querySelector("h1");
    startingH1.remove();

    const newH1 = document.createElement("h1");
    const body = document.querySelector("body")
    newH1.append("Webpage Recreation Practice");
    const pElement = document.createElement("p")
    pElement.append("The HTML of this webpage was created with JavaScript.");
    const image = document.createElement("img");
    image.setAttribute('src', 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900');
    image.setAttribute('alt', 'This is an image of a Multicolored Tanager bird from birdsoftheworld.org');
    image.setAttribute('style', '{{width:"50%"}} /');
    const tanagerH1 = document.createElement("h1");
    tanagerH1.append("Facts about the Multicolored Tanager");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    li1.append("It is endemic to the mountains of Colombia.");
    li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
    ul.append(li1, li2);
    const h2 = document.createElement("h2");
    h2.append("Source");
    const link = document.createElement("a")
    link.setAttribute('href', 'https://en.wikipedia.org/wiki/Multicoloured_tanager');
    link.append("Wikipedia");
    body.append(newH1, pElement, image, tanagerH1, ul, h2, link,);

};