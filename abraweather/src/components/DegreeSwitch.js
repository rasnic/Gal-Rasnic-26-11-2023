import React, {useState, useEffect} from "react"
import Switch from "react-switch";
const DegreeSwitch = () => {
    const [checked,setChecked] = useState(true);
    const handleChange = () => {
        setChecked(!checked);
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