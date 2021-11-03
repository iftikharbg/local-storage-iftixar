"use strict"
let NewArray = []
let favourites = document.querySelector("span")
let hearts = document.querySelectorAll(".card .fa-heart")

hearts.forEach(el=>el.addEventListener("click",()=>{
    NewArray.push(el.parentElement.getAttribute("id"))
    localStorage.setItem("array",NewArray)
    favourites.textContent=NewArray.length
}))

