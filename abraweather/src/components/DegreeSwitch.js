import React, {useState, useEffect} from "react"
import Switch from "react-switch";
import { useSelector, useDispatch } from 'react-redux'
import {change} from "../app/reducers/TempSlice"
const DegreeSwitch = () => {
    const [checked,setChecked] = useState(true);
    const temp = useSelector((state) => state.temp.value)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(temp === "cel"){
            setChecked(false);
        } else{
            setChecked(true);
        }
    },[temp])

    const handleChange = () => {
        setChecked(!checked);
        dispatch(change())
    }
    return(
        <div className="degreeSwitch">
            <h3 className="degreeText">C°</h3>
            <label>
            <Switch className='switch' onChange={handleChange} checked={checked} checkedIcon={false} uncheckedIcon={false} onColor="#8ca8f5"/>
            </label>
            <h3 className="degreeText">F°</h3>
        </div>
    )
    
}
export default DegreeSwitch