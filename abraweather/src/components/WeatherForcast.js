import React, { useEffect,useState } from 'react';
import {Card, CardBody,Row,Col,Button} from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import heart from '../assets/heart.svg'
import heartdm from '../assets/heartdark.svg'
import heartfilled from '../assets/heartfilled.svg'
import {addFavorite,removeFavorite} from "../app/reducers/FavoritesSlice"

const WeatherForcast = (props) => {
    const temp = useSelector((state) => state.temp.value);
    const theme = useSelector((state) => state.theme.value);
    const favorites = useSelector((state) => state.favorites.value);
    const dispatch = useDispatch()
    const [isDefaultLocation,setIsDefaultLocation] = useState(localStorage.getItem('defaultLocation')?JSON.parse(localStorage.getItem('defaultLocation')).city === props.city:false);
    const [isFavorite,setIsFavorite] = useState(false);
    const [clr,setClr] = useState(theme)
    useEffect(() => {
        setClr(theme)
    },[theme])
    useEffect(() => {
        if (!localStorage.getItem('favorites')) {
            localStorage.setItem('favorites', JSON.stringify([]))
        } else {
            setIsFavorite(favorites.filter((favorite) => favorite.id === props.id).length === 0 ? false: true)
        }
    },[props.id,favorites])
    const setDefaultLocation = () => {
        localStorage.setItem('defaultLocation',JSON.stringify({city:props.city,id:props.id}));
        setIsDefaultLocation(true);
    }

    const addToFavorites = () =>{
        const newFavorites = [...favorites,{city:props.city,id:props.id}];
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        dispatch(addFavorite({city:props.city,id:props.id}))
        setIsFavorite(true)
    }

    const removeFromFavorites = () =>{
        const newFavorites = favorites.filter((favorite) => favorite.id !== props.id);
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        dispatch(removeFavorite(props.id))
        setIsFavorite(false)
    }

    return(<>{props.hasOwnProperty('city') && <Card theme={clr}>
        <CardBody>
            <Row xs="12">
                <Col xs="6" className='forcastTopLeft'>
                    <Row className='topLeftText' theme={clr}>{props.city}</Row>
                    {temp === 'cel'? <Row className='topLeftText' theme={clr}> {props.today.cel} °C</Row> : <Row className='topLeftText' theme={clr}> {props.today.fahr} °F</Row>}
                </Col>
                <Col xs="6" className='justify-end'>
                    {!isDefaultLocation && clr === 'light' && <img src={heart} onClick={() => setDefaultLocation()} alt="make default" className='mx-2 cursor-pointer'/>}
                    {!isDefaultLocation && clr === 'dark' && <img src={heartdm} onClick={() => setDefaultLocation()} alt="make default" className='mx-2 cursor-pointer'/>}
                    {isDefaultLocation&&<img src={heartfilled} className='mx-2' alt="default"/>}
                    {!isFavorite ?<Button onClick={() => addToFavorites()}>Add to Favorites</Button>:
                    <Button onClick={() => removeFromFavorites()}>Remove from Favorites</Button>}
                </Col>
            </Row>
            <Row className="weatherText justify-content-center mb-5" theme={clr}>{props.today.text}</Row>
            <Row className="mb-3 daysContainer">{props.days.map((day) => {
                return(<Col key={day.dayName}><Card className='daysItem' theme={clr}>
                    <Row className='justify-content-center dayText my-4' theme={clr}>{day.dayName}</Row>
                    {temp === 'cel'?<Row className='justify-content-center dayText mt-2 mb-4' theme={clr}>{day.cel.min} - {day.cel.max} °C</Row>:
                    <Row className='justify-content-center dayText mt-2 mb-4' theme={clr}>{day.fahr.min} - {day.fahr.max} °F</Row>}
                </Card></Col>)
            })}</Row>
        </CardBody>
    </Card>}</>)
}

export default WeatherForcast;