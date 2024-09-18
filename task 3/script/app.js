// selects the calculate button
const getCalcBtn = document.querySelector('#calcBtn');

getCalcBtn.addEventListener('click', () => {

  // getting users input value from the DOM
  const getUserInput = parseInt(document.querySelector('#userInput').value);
  const getError = document.querySelector('#error');
  const getSelect = document.querySelector('#select').value;
  const getResults = document.querySelector('#results');

  // output a message if the user inputs nothing
  if (!getUserInput) {
    getError.innerHTML = 'All fields are required!';
    getError.style.color = 'red';
  }

  // prevent NaN to be printed if the input is not a number
  if (isNaN(getUserInput)) {
    getResults = getUserInput;
  }

  switch (getSelect) {
    case 'fahrenheit':
      const calcCelsius = (getUserInput - 32 ) * 5/9;
      // getResults.innerHTML = `${calcCelsius}°C`;
      getResults.innerHTML = `${Math.round(calcCelsius)}°C`;
      getResults.style.color = 'green';
      getError.style.display = 'none';
      break;
    case 'celsius':
      const calcFahrenheit = (getUserInput * 9/5 ) + 32;
      // getResults.innerHTML = `${calcFahrenheit}°F`;
      getResults.innerHTML = `${Math.round(calcFahrenheit)}°F`;
      getResults.style.color = 'green';
      getError.style.display = 'none';
      break;
    default:
      break;
  }

});