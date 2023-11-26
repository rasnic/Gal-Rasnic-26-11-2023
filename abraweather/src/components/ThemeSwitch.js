import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import {change} from "../app/reducers/ThemeSlice"
import Switch from "react-switch";
import light from "../assets/sun.svg";
import dark from "../assets/moon-fill.svg"
const ThemeSwitch = () => {
    const [checked,setChecked] = useState(true);
    const theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()

    useEffect(() => {
        if(theme === "light"){
            setChecked(false);
        } else{
            setChecked(true);
        }
    },[theme])
    const handleChange = () => {
        setChecked(!checked);
        dispatch(change())
    }
    return(
        <div className="themeSwitch">
        <img className='themeImg' src={light} alt="light" />
        <label>
        <Switch className='switch' onChange={handleChange} checked={checked} checkedIcon={false} uncheckedIcon={false} onColor="#8ca8f5"/>
        </label>
        <img className='themeImg' src={dark} alt="dark" />
        </div>
    )
    
}
export default ThemeSwitch