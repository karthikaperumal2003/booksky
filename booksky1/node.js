var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});
//select cancel button
var cancelbutton=document.getElementById("cancel")
cancelbutton.addEventListener("click", function def(event){
    event.preventDefault()
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

})
//selecting container,Add-book,book-title-input,BookAuthor-Input,Book-discription-input


var container=document.querySelector(".container")
var addbook=document.getElementById("Add-book")
var bookTitleInput=document.getElementById("book-title-input")
var BookAuthorInput=document.getElementById("BookAuthor-Input")
var Bookdiscriptioninput=document.getElementById("Book-discription-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${bookTitleInput.value}</h1>
    <h5>${BookAuthorInput.value} </h5>
    <p>${Bookdiscriptioninput.value}</p>
    <button onclick="deletebook(event)">delete</button>`
    container.append(div)
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
})
function deletebook(event)
{
    event.target.parentElement.remove()
}