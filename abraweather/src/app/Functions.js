export const Functions = {
    manage5DayData,
    celToFahr
}

function manage5DayData(data,id,city){
    const dataObj = {days:[],id,city};
    for (let day = 0; day < data.length; day++) {
        const dayName = new Date(data[day].Date.slice(0,4),Number(data[day].Date.slice(5,7))-1,data[day].Date.slice(8,10)).toString().slice(0,3)
        const dayData = {
            dayName,
            cel : {min : Math.round(data[day].Temperature.Minimum.Value), max : Math.round(data[day].Temperature.Maximum.Value)},
            fahr: {min : Math.round(celToFahr(data[day].Temperature.Minimum.Value)), max : Math.round(celToFahr(data[day].Temperature.Maximum.Value))}
        }
        dataObj.days.push(dayData)
    }
    return dataObj
}
function celToFahr(temperature) {
    return temperature * 1.8 + 32;
}

