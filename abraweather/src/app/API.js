import axios from "axios"
import { Functions } from "./Functions";
const apikey = "TXqYyE2MX9acwxjrclOFY8htIpfpXbGG"

export async function get5DayForcast(cityId,city) {
    const url = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + cityId + "?apikey=" + apikey + "&details=false&metric=true";
    const options = {
        headers: {
            'Accept': 'application/json, text/plain, */*',
        },
    }
    try{
        const res = await axios.get(url, options);
        if(res.status === 200){
            const data = Functions.manage5DayData(res.data.DailyForecasts,cityId,city);
            const today = await getCurrentWeather(cityId)
            return {data,today}
        }
        else{
            return "api call was unsuccessfull"
        }
    } catch(e){
        return "api call was unsuccessfull"
    }

}

export async function getLocations(searchPhrase) {
    const url = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" + apikey + "&q=" + searchPhrase;
    const options = {
        headers: {
            'Accept': 'application/json, text/plain, */*',
        },
    }
    try{
        const res = await axios.get(url, options);
        if(res.status === 200){
            return res.data
        }
        else{
            return "api call was unsuccessfull"
        } 
    } catch(e){
        return "api call was unsuccessfull"
}
}
export async function getCurrentWeather(locationId) {
    const url = "https://dataservice.accuweather.com/currentconditions/v1/" + locationId + "?apikey=" + apikey;
    const options = {
        headers: {
            'Accept': 'application/json, text/plain, */*',
        },
    }
    try{
        const res = await axios.get(url, options);
        if(res.status === 200){
            return {text: res.data[0].WeatherText, fahr: Math.round(res.data[0].Temperature.Imperial.Value), cel: Math.round(res.data[0].Temperature.Metric.Value)}
        }
        else{
            return "api call was unsuccessfull"
        }
    } catch(e){
        return "api call was unsuccessfull"
    }
}