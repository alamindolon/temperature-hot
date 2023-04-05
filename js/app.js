const Api_key= `f33bbc35510d0b1b244199642f9b8284`;
const loadTemperature = city =>
{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => temparetureDisplay(data));
}

const temparetureDisplay = data =>
{
    // const tempareture = document.getElementById('tempsareture');
    // tempareture.innerText = data.main.temp;
    setInnerTextByID('tempsareture',data.main.temp);
    setInnerTextByID('condition',data.weather[0].main);
    
}

const setInnerTextByID = (id,text) =>
{
    const tempareture = document.getElementById(id);
    tempareture.innerText = text;
}
document.getElementById('search_btn').addEventListener('click',function()
{
   const searchFiled = document.getElementById('search_filed');
   const city = searchFiled.value;
   const cityName = document.getElementById('nameOfCity');
   cityName.innerText= city;
   loadTemperature(city);
})

loadTemperature('dhaka');