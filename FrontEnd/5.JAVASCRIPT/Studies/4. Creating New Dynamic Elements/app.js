const newLink=document.createElement("a");
const cardbody =document.getElementsByClassName("card-body")[1];


newLink.id="clear-todos";
newLink.className="btn btn-warning";
newLink.href="https://www.youtube.com.tr";
newLink.target="_blank";
newLink.appendChild(document.createTextNode("Go to a Diffirent Page!"));

cardbody.appendChild(newLink);
console.log(newLink);