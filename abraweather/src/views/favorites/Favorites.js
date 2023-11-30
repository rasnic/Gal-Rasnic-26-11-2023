import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import { useSelector} from 'react-redux'
import {getCurrentWeather} from '../../app/API';
import {Card,Row,Col,Toast,ToastHeader,ToastBody} from 'reactstrap'
import { useNavigate  } from "react-router-dom";

const Favorites = () => {
    const temp = useSelector((state) => state.temp.value);
    const favorites = useSelector((state) => state.favorites.value);
    const theme = useSelector((state) => state.theme.value);
    const [weatherData,setWeatherData] = useState()
    const [clr,setClr] = useState(theme)
    const [errToast, setErrToast] = useState()
    const navigate = useNavigate ();
    
    useEffect(() => {
        setClr(theme)
    },[theme])
    
    useEffect(() => {
        if (favorites.length > 0) {
            getWeather(favorites)
        }
    },[])

    const getWeather = async (list) => {
        const data = JSON.parse(JSON.stringify(list))
        for (let city = 0; city < data.length; city++) {
            const weather = await getCurrentWeather(data[city].id)
            if (typeof weather === 'object') {
                data[city] = {...data[city], ...weather}
            } else{
                setErrToast(weather)
                break
            }
        }
        setWeatherData(data)
    }

    const openFavorite = (city,id) => {
        localStorage.setItem('clickedLocation',JSON.stringify({city,id}));
        navigate(`/`)
    }

    return(<>
        <Header/>
        {weatherData && <Row className="mb-3 citiesContainer mt-5">{weatherData.map((city) => {
                return(<Col xl="2" lg="3" sm="4" xs="12"  key={city.id}><Card className='daysItem cursor-pointer' theme={clr} onClick={()=> openFavorite(city.city,city.id)}>
                    <Row className='justify-content-center dayText my-4' theme={clr}>{city.city}</Row>
                    {temp === 'cel'?<Row className='justify-content-center dayText mt-2 mb-2' theme={clr}>{city.cel} °C</Row>:
                    <Row className='justify-content-center dayText mt-2 mb-2' theme={clr}>{city.fahr} °F</Row>}
                    <Row className='justify-content-center dayText mt-2 mb-4' theme={clr}>{city.text}</Row>
                </Card></Col>)
            })}</Row>}
            {errToast && <Toast isOpen={errToast}>
            <ToastHeader toggle={() => setErrToast()}/>
                <ToastBody>
                    {errToast}
                </ToastBody>
            </Toast>}
        </>)
}

export default Favorites;
