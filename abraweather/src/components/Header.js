import React, {useState,useEffect} from 'react';
import {Button,ButtonGroup} from "reactstrap";
import { useNavigate } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';
import DegreeSwitch from './DegreeSwitch';
import { useSelector} from 'react-redux'
const Header = (props) => {
    const navigate = useNavigate();
    const theme = useSelector((state) => state.theme.value)
    const [clr,setClr] = useState(theme)
    const [page,setPage] = useState("home")
 
    useEffect(() => {
        setClr(theme)
      },[theme])

    useEffect(()=>{
        setPage(props.page)
    },[props.page])

    return(<>{page === "home"?
            <div className="header" theme={clr}>
                <DegreeSwitch/>
                <ThemeSwitch/>
                <ButtonGroup className="pageButtons" >
                    <Button className='selectedBtn mt-1' disabled >Home</Button>
                    <Button className='unselectedBtn mt-1' color="primary"  onClick={() => {navigate('/favorites')}}>Favorites</Button>
                </ButtonGroup>
            </div>:
            <div className="header" theme={clr}>
                <DegreeSwitch/>
                <ThemeSwitch/>
                <ButtonGroup className="pageButtons" >
                    <Button className='unselectedBtn mt-1' color="primary" onClick={() => {navigate('/')}}>Home</Button>
                    <Button className='selectedBtn mt-1' disabled>Favorites</Button>
                </ButtonGroup>
            </div>}</>)
}
export default Header