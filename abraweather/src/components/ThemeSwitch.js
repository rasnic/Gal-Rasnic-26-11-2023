import React, {useState, useEffect} from "react"
import Switch from "react-switch";
import light from "../assets/sun.svg";
import dark from "../assets/moon-fill.svg"
const ThemeSwitch = () => {
    const [checked,setChecked] = useState(true);
    const handleChange = () => {
        setChecked(!checked);
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