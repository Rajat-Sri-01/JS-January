const form = document.querySelector('form');
form.addEventListener('submit', function(eve){
    eve.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const bmiResults = document.querySelector('#bmiResults');
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `${bmi}`;
        if (bmi < 18.6) {
            bmiResults.innerHTML = "Under Weight"
            bmiResults.style.color = 'green'
        }
        else if ( bmi >= 18.6 && bmi <= 24.9){
            bmiResults.innerHTML = " Normal range weight"
            bmiResults.style.color = 'yellow'
        }
        else if (bmi > 24.9){
            bmiResults.innerHTML = "Overweight"
            bmiResults.style.color = 'red'
        }
        else{
            bmiResults.innerHTML = `${bmi}`;
        }
    }
})