import React from 'react';
import {Button,ButtonGroup} from "reactstrap";
import { useNavigate } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';
import DegreeSwitch from './DegreeSwitch';
const Header = () => {
    const navigate = useNavigate();

    return(<>{window.location.pathname === '/' ?
            <div className="header">
                <DegreeSwitch/>
                <ThemeSwitch/>
                <ButtonGroup className="pageButtons" >
                    <Button className='pageButton selectedBtn'disabled>Home</Button>
                    <Button className='pageButton unselectedBtn' onClick={() => {navigate('/favorites')}}>Favorites</Button>
                </ButtonGroup>
            </div>:
            <div className="header">
                <DegreeSwitch/>
                <ThemeSwitch/>
                <ButtonGroup className="pageButtons" >
                    <Button className='pageButton unselectedBtn' onClick={() => {navigate('/')}}>Home</Button>
                    <Button className='pageButton selectedBtn' disabled>Favorites</Button>
                </ButtonGroup>
            </div>}</>)
}
export default Header