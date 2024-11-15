import React from "react";
import '../../styles/data/CustomForm.css';
import CustomButton from "../buttons/CustomButton";
import { useForm } from 'react-hook-form';
import InputName from "./InputName";
import InputCPF from "./InputCPF";
import InputEmail from "./InputEmail";
import InputPhoneNumber from "./InputPhoneNumber";

interface Field {
    name: string;
    label: string;
}

interface CustomFormProps {
    fields: Field[];
    onSubmitData: (data: object) => void;
}

const CustomForm: React.FC<CustomFormProps> = ({ fields, onSubmitData }) => {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data: object) => {
        onSubmitData(data);
    }

    return(
        <div className="form-container-div">
            <form className="form-container">
                {fields.map((field, index) => (
                    <div key={index}>

                        {errors[field.name] && (
                            <p className='error-message'>{errors[field.name]?.message as string}</p>
                        )}

                        {field.name === 'name' && (
                            <InputName
                                label={field.label}
                                register={register(field.name, {
                                    required: 'Name is required',
                                    minLength: { value: 3, message: 'Name must be at least 3 characters long'}
                                })}
                            />
                        )}
                        {field.name === 'tag-name' && (
                            <InputName
                                label={field.label}
                                register={register(field.name)}   
                            />
                        )}
                        {field.name === 'cpf' && (
                            <InputCPF
                                label={field.label}
                                register={register(field.name, {
                                    required: 'CPF is required',
                                    minLength: { value: 11, message: 'CPF must be at least 11 characters long'}
                                }
                                )}
                            />
                        )}
                        {field.name === 'email' && (
                            <InputEmail
                                label={field.label}
                                register={register(field.name)}
                            />
                        )}
                        {field.name === 'phone-number' && (
                            <InputPhoneNumber
                                label={field.label}
                                register={register(field.name, {
                                    required: 'Phone number is required',
                                    minLength: {value: 11, message: 'Phone number must be at least 11 characters long.'}
                                }
                                )}
                            />
                        )}
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