import React from "react";
import { InputProps } from "../../interfaces/InputProps";
import '../../styles/data/InputStyle.css';

const InputName : React.FC<InputProps> = ({ label, register }) => {
    return(
        <div className='form-card'>
            <label className='form-label'>
                {label}
            </label>
            <input
                className='form-input'
                type='text'
                placeholder={`Enter ${label.toLowerCase()} here...`}
                {...register}
            />
        </div>
    )
}
export default InputName;