import React from "react";
import { InputProps } from "../../interfaces/InputProps";
import '../../styles/data/InputStyle.css';

const InputEmail : React.FC<InputProps> = ({ label, register }) => {
    return(
        <div className='form-card'>
            <label className='form-label'>
                {label}
            </label>
            <input
                className='form-input'
                type='email'
                placeholder={`Enter ${label.toLowerCase()} here...`}
                {...register}
            />
        </div>
    )
}
export default InputEmail;