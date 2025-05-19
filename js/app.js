//we are first grabbing the button from the html page

let checkButton = document.getElementById("checkAge")
console.log(checkButton)

//second we are giving it action to do something
//in this case we have to have the button show

checkButton.addEventListener("click", () => {
    let ageInput = document.getElementById("ageInput");
    console.log(ageInput.value)
    let displayResult = document.querySelector(".displayResult h3")
    console.log(displayResult)
    if(ageInput.value >= 18){
        displayResult.innerText = "Come on in, if your old enough."
    } else if (ageInput.value < 18){
       displayResult.innerText = "Go home!!"
    }
})