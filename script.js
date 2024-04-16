let inputString = document.getElementById("inputStr")
let display = document.querySelector("#output")
let reverseString = document.querySelector("#btn")

reverseString.addEventListener("click", () => {
    let result = inputString.value.split("").reverse().join("")
    console.log(result)

    display.value = result
})

// let text = "remember"

// console.log(text.split("").reverse().join(""))