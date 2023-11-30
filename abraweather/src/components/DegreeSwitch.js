import React, {useState, useEffect} from "react"
import Switch from "react-switch";
import { useSelector, useDispatch } from 'react-redux'
import {change} from "../app/reducers/TempSlice"
const DegreeSwitch = () => {
    
    const theme = useSelector((state) => state.theme.value);
    const temp = useSelector((state) => state.temp.value)
    const [checked,setChecked] = useState(temp === "cel"?false:true);
    const [clr,setClr] = useState(theme)
    const dispatch = useDispatch()
    useEffect(() => {
        setClr(theme)
    },[theme])
    
    useEffect(() => {
        if(temp === "cel"){
            setChecked(false);
            localStorage.setItem('temp', 'cel')
        } else{
            setChecked(true);
            localStorage.setItem('temp', 'fahr')
        }
    },[temp])

    const handleChange = () => {
        setChecked(!checked);
        dispatch(change())
    }
    return(
        <div className="degreeSwitch">
            <h4 className="degreeText" theme={clr}>°C</h4>
            <label>
            <Switch className='switch' onChange={handleChange} checked={checked} checkedIcon={false} uncheckedIcon={false} onColor="#8ca8f5"/>
            </label>
            <h4 className="degreeText" theme={clr}>°F</h4>
        </div>
    )
    
}
export default DegreeSwitch