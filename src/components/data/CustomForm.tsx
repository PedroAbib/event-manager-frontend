import React from "react";
import '../../styles/data/CustomForm.css';
import CustomButton from "../buttons/CustomButton";
import { useForm } from 'react-hook-form';

interface Field {
    name: string;
    label: string;
    type: string;
}

interface CustomFormProps {
    fields: Field[];
}

const CustomForm: React.FC<CustomFormProps> = ({ fields }) => {
    const { register, handleSubmit} = useForm();

    const onSubmit = (data : object) => {
        console.log(data) //////////////////////////////////////////////////
    }

    return(
        <div>
            <form>
                {fields.map((field, index) => (
                    <div className='form-card' key={index}>
                        <label className='form-label'>
                            {field.label}
                        </label>
                        <input
                            className='form-input'
                            type={field.type}
                            placeholder={`Enter ${field.label.toLowerCase()} here...`}
                            {...register(field.name)}
                        />
                    </div>
                ))}

                <div className='submit-container'>
                    <CustomButton
                        label='Save'
                        onClick={handleSubmit(onSubmit)}
                        color='#17C500'
                    />
                </div>
            </form>
        </div>
    )
}

export default CustomForm;