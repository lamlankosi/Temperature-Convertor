function convertTemperature() {
    
    const fahrenheit = document.getElementById('fahrenheit').value;
    
   
    const celsius = (fahrenheit - 32) * 5 / 9;
  
    document.getElementById('result').innerText = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
}
