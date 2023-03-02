import data from '../data/data.json';
import countries from '../data/countries.json';





console.log(data);










async function getCountryData(path){

    let response = await fetch(path);
    let data = await response.json();
    return data;

}