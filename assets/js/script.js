var currentNumberWapper = document.getElementById('currentNumber')
var currentNumber = 0

function cor(){
    if(currentNumber<0){
        currentNumberWapper.style.color='red'
    }else{
        currentNumberWapper.style.color='black'
 
    }
}
function decrement(){
    currentNumber = currentNumber - 1
    cor()
    currentNumberWapper.innerHTML = currentNumber
}
function increment(){
    currentNumber = currentNumber + 1
    cor()
    currentNumberWapper.innerHTML = currentNumber
}