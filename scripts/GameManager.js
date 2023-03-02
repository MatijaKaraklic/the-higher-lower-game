const ENDPOINT = 'https://restcountries.com/v3.1/name/';
const DATA_PATH = './data/data.json'


getCountryData(DATA_PATH)
.then(data => {
    console.log(data);
});




async function getCountryData(path){

    let response = await fetch(path);
    let data = await response.json();
    return data;
}