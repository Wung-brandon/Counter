let value = document.getElementById("value")
let count = 0

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

increase.addEventListener('click', function(){
    count++
    value.innerHTML = count
    if (count > 0){
        value.style.color = 'green'
    }
})

decrease.addEventListener('click', function(){
    count--
    value.innerHTML = count
    if (count < 0){
        value.style.color = 'yellow'
    }
    
    // console.log(value)
})

reset.addEventListener('click', function(){
    count = 0
    value.innerHTML = 0;
    if (count == 0){
        value.style.color = 'black'
    }
    
   
})