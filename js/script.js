let rateVal;
let clicked = false
function assign(param){
  if (clicked == true){
    document.getElementById(`btnn${rateVal}`).classList.remove('clicked-button')
    rateVal = param
    document.getElementById(`btnn${param}`).classList.add('clicked-button')
  } else {
    rateVal = param
    document.getElementById(`btnn${param}`).classList.add('clicked-button')
    clicked = true
  }
}
function submitt(){
  if (clicked !== true){
    alert('Please select a rating')
  } else if(clicked == true){
    firstCard.classList.add('hidden-card')
    rateText.innerHTML = `You selected ${rateVal} out of 5`
    secondCard.classList.remove('hidden-card')
  }
}