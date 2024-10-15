
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "fd48bdf8a8b87b3c140f17625f4e2d57";

function getInputValue(event) {
    event.preventDefault(); 
    let value = document.getElementById('InputCity').value;
    if(value.trim() === ""){
        alert('Empty Input');
        return;
    }
    document.getElementById('InputCity').value = "";
    try{
    
    fetch(`${API_URL}${value}&appid=${API_KEY}&units=metric`)
    .then((response => response.json()))
    .then(result => {
       
     
        if(result.cod === '404'){
            alert('City not found , Please try again');
            return;
        }
        
        document.getElementById('Temp').innerHTML = Math.round(result.main.temp) + "°C";
        document.getElementsByClassName('cityName')[0].innerHTML = result.name;
        document.getElementsByClassName('Country')[0].innerHTML = result.sys.country;
        
    });
    
}

catch(Error){
    alert('Connection Error');
}
    
    

}


document.getElementById("cityForm").addEventListener("submit", getInputValue);
document.getElementById("searchIcon").addEventListener("click", getInputValue);