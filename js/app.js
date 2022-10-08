// Do not show API key in professional work

const API_KEY = `e064c5c5e83d27c1eba47c32916452f7`;

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}
// loadTemperature('dhaka');

const displayTemperature = data =>{
    // const temperature = document.getElementById('temp');
    // temperature.innerText = data.main.temp;
    console.log(data);
    setInnerText('temp', data.main.temp);
    setInnerText('condition', data.weather[0].main)
}

const setInnerText = (id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    document.getElementById('condition').innerText = city;
    loadTemperature(city);
})