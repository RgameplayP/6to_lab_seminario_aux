var rootDiv = document.getElementById("root");

var heading2 = document.createElement("h2");

heading2.textContent = "MANIPULANDO DOM";

rootDiv.appendChild(heading2);

var link = document.querySelector('a');

link.setAttribute("href", "https://keybr.com");

var ul = document.createElement("ul");

const buyList = [
  "books",
  "bread",
  "eraser",
  "earphones",
  "collection-cards",
  "hdmi",
  "vga",
  "motherboard",
  "university-books",
];

function addItemToList(item) {
  var li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
}

buyList.forEach(addItemToList);

rootDiv.appendChild(ul);





