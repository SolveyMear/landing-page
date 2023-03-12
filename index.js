let burgerButton = document.querySelector("#burger-button")
burgerButton.addEventListener("click", function(){
    let menu = document.querySelector(".menu")
    let hasHide = menu.classList.contains("hide")
    if (hasHide){
        menu.classList.remove("hide")
    }
    else{
        menu.classList.add("hide")
    }
})