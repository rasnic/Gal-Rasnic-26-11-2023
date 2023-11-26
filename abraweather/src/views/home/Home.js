import React, {useEffect, useState} from 'react';
import {Button,ButtonGroup} from "reactstrap";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return(<>
    <div className="header">
        <ButtonGroup className="pageButtons" >
            <Button className='pageButton selectedBtn'disabled>Home</Button>
            <Button className='pageButton unselectedBtn' onClick={() => {navigate('/favorites')}}>Favorites</Button>
        </ButtonGroup>
    </div>

    <h1>home</h1>
    </>
    )
}

export default Home;