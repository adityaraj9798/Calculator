let random= Math.random()
console.log(random)
let a=prompt("Enter the first number")
let b=prompt("Enter operation")
let c=prompt("Enter second number");

let obj= {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
if(random > 0.1){
    console.log(`the result is ${a} ${c} ${b}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c=obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}