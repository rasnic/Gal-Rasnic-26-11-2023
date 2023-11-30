import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import {changeTheme} from "../app/reducers/ThemeSlice"
import Switch from "react-switch";
import light from "../assets/sun.svg";
import dark from "../assets/moon.svg";
import lightdm from "../assets/sundark.svg";
import darkdm from "../assets/moondark.svg";
const ThemeSwitch = () => {
    const theme = useSelector((state) => state.theme.value)
    const [clr,setClr] = useState(theme)
    const [checked,setChecked] = useState(theme === "light"?false:true);
    const dispatch = useDispatch()

    useEffect(() => {
        if(theme === "light"){
            setChecked(false);
            localStorage.setItem('theme','light')
        } else{
            setChecked(true);
            localStorage.setItem('theme','dark')
        }
    },[theme])
    const handleChange = () => {
        setChecked(!checked);
        dispatch(changeTheme())
    }
    useEffect(() => {
        setClr(theme)
      },[theme])
    return(
        <div className="themeSwitch">
        {clr === "light"?<img className='themeImg' src={light} alt="light" />:<img className='themeImg' src={lightdm} alt="light" />}
        <label>
        <Switch className='switch' onChange={handleChange} checked={checked} checkedIcon={false} uncheckedIcon={false} onColor="#8ca8f5"/>
        </label>
        {clr === "light"?<img className='themeImg' src={dark} alt="dark" />:<img className='themeImg' src={darkdm} alt="dark" />}
        </div>
    )
    
}
export default ThemeSwitch