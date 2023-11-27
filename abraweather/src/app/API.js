import axios from "axios"
const apikey = "TXqYyE2MX9acwxjrclOFY8htIpfpXbGG"

export async function get5DayForcast(cityId="215854") {
    const url = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + cityId + "?apikey=" + apikey + "&language=en-us&details=false&metric=true";
    const options = {
        headers: {
            'Accept': 'application/json, text/plain, */*',
        },
    }
    const res = await axios.get(url, options);
    console.log(res);
    debugger
    const resJson = await res.json();
    if (!res.ok) {
        console.error("An error occurred");
        return null;
    }

}

