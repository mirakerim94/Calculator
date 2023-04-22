//clear
document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("#display").value = " ";
})

//backSpace function
const backSpace = () => {
    const number = document.querySelector("#display").value.slice(0, -1);
    document.querySelector("#display").value = number;
}



//calculate the percentage
const calculatePercentage = () => {
    const input = document.calculator.display.value;
    //console.log("Input value: " + input);
    const num = parseFloat(input);
    const percent = num / 100;
    document.calculator.display.value = percent + "%";
    
    }

//console.log(calculatePercentage())

