import React, {useEffect, useState} from 'react';
import {Button,ButtonGroup} from "reactstrap";
import { useNavigate } from 'react-router-dom';
const Favorites = () => {
    const navigate = useNavigate();
    
    return(<>
        <div className="header">
            <ButtonGroup className="pageButtons" >
                <Button className='pageButton unselectedBtn' onClick={() => {navigate('/')}}>Home</Button>
                <Button className='pageButton selectedBtn' disabled>Favorites</Button>
            </ButtonGroup>
        </div>
        <h1>favorites</h1>
        </>)
}

export default Favorites;
