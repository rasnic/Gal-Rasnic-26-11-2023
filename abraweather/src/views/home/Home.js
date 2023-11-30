import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {get5DayForcast,getLocations} from '../../app/API';
import {Row,Input,Button,Container,Toast,ToastHeader,ToastBody} from 'reactstrap'
import WeatherForcast from '../../components/WeatherForcast'

const Home = () => {
    const [forcastData, setForcastData] = useState();
    const [searchText, setSearchText] = useState('');
    const [validSearch, setValidSearch] = useState(false);
    const [citiesList, setCitiesList] = useState();
    const [errToast, setErrToast] = useState()
    
    useEffect(() => {
        getData()
    },[])

    useEffect(() => {
        if (searchText.length > 0) {
            const validate = searchText.match(/^[a-zA-Z ]+$/);
            if (validate === null) {
                setValidSearch(false);
            } else{
                setValidSearch(true);
            }
        } else{
            setValidSearch(false);
        }
    },[searchText])
    
    const getData = async () => {
        setForcastData();
        let data;
        if(!localStorage.getItem('clickedLocation') && !localStorage.getItem('defaultLocation')){
            localStorage.setItem('defaultLocation',JSON.stringify({id: "215854", city: 'Tel Aviv'}))
            data = await get5DayForcast("215854",'Tel Aviv')
        } else if(!localStorage.getItem('clickedLocation')){
            const location = JSON.parse(localStorage.getItem('defaultLocation'));
            data = await get5DayForcast(location.id, location.city);
        } else {
            const location = JSON.parse(localStorage.getItem('clickedLocation'));
            data = await get5DayForcast(location.id, location.city);
            localStorage.removeItem('clickedLocation')
        }
        if(typeof data === 'object'){
            setForcastData(data);
        } else {
            setErrToast(data)
        }
    }
    const searchLocation = async () => {
        if (searchText.length > 0 && validSearch) {
            const locations = await getLocations(searchText);
            let locationsFound = [];
            if (typeof locations === 'object' && locations.length > 0) {
                for (let city = 0; city < locations.length; city++) {
                    locationsFound.push({id:locations[city].Key, city: locations[city].LocalizedName})
                }
                setCitiesList(locationsFound);
            }
            else if (typeof locations !== 'object') {
                setErrToast(locations)
            } else {
                setErrToast("not locations found for this search")
            }
        } else{
            if(searchText.length === 0){
                setErrToast("the searchbox is empty")
            } else{
                setErrToast("the search is invalid")
            }
        }
    }

    const selectViewLocation = (selected) => {
        if (selected !== 'Select a city') {
            localStorage.setItem('clickedLocation',selected);
            getData();
            setCitiesList();
            setSearchText('');
        }
    }
    return(<>
        <Header page="home"/>
        <Container>
        <Row className='my-3 justify-content-center' xs="12">
            <Input placeholder='Search a city' className='searchInput' onChange={(event) => {setSearchText(event.target.value)}}/>
            <Button size="md" className="searchBtn" color="primary" onClick={() => searchLocation(searchText)}>Search</Button>
        </Row>
            {citiesList && <Row className='selectorDiv justify-content-center my-2' xs="12">
            <select onChange={(e) => selectViewLocation(e.target.value)}><option key={-1}>Select a city</option>
                {citiesList.map((e, key) => {
                                                    return <option key={key} value={JSON.stringify(e)}>{e.city}</option>;
                                                })}</select>
        </Row>}
        {forcastData && <WeatherForcast city={forcastData.data.city} today={forcastData.today} id={forcastData.data.id} days={forcastData.data.days}/>}
        </Container>
        {errToast && <Toast>
            <ToastHeader toggle={() => setErrToast()}/>
                <ToastBody>
                    {errToast}
                </ToastBody>
            </Toast>}
        </>)
}

export default Home;