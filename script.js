const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault(); // stop the values that are not go to server 

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if(height == ' ' || weight == ' ' || height == null || weight == null ){
  results.innerHTML = `Height or Weight is Empty or Both are empty, Please provide your height and weight`
  }else if(isNaN(height)){
    results.innerHTML = `${height} height is not a number, Please provide valid height `
  }else if(isNaN(weight)){
    results.innerHTML = `${weight} weight is not a number, Please provide valid weight `
  }else if(height <= 0 || weight <= 0){
    results.innerHTML = `height and weight are not less than equal to zero`
  }else if(bmi <= 18.6 ){
    results.innerHTML = `<span>${bmi} need to increase your weight</span>`
  }else if(18.6 < bmi && bmi < 24.9 ){
    results.innerHTML = `<span>${bmi} Congratulation you are fit and normal</span>`
  }else if(bmi > 24.9 ){
    results.innerHTML = `<span>${bmi} need to loose your weight</span>`
  }  
})
