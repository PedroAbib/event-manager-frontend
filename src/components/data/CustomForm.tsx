import React from "react";
import '../../styles/data/CustomForm.css';
import CustomButton from "../buttons/CustomButton";
import { FieldValues, Path, useForm } from 'react-hook-form';
import InputName from "./InputName";
import InputCPF from "./InputCPF";
import InputEmail from "./InputEmail";
import InputPhoneNumber from "./InputPhoneNumber";

export interface Field<T> {
    name: Path<T>;
    label: string;
    type: "text" | "email" | "cpf" | "phone";
    validation?: Record<string, any>;
}

interface CustomFormProps<T extends FieldValues> {
    fields: Field<T>[];
    onSubmitData: (data: T) => void;
}

const CustomForm = <T extends FieldValues>({ fields, onSubmitData }: CustomFormProps<T>) => {
    const { register, handleSubmit, formState: { errors }} = useForm<T>();

    const onSubmit = (data: T) => {
        console.log(data)
        onSubmitData(data);
    };

    const inputComponents: Record<string, React.FC<any>> = {
        text: InputName,
        email: InputEmail,
        cpf: InputCPF,
        phone: InputPhoneNumber,
    };

    return(
        <div className="form-container-div">
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                {fields.map((field, index) => {
                    const InputComponent = inputComponents[field.type];

                    if (!InputComponent) {
                        console.error(`No input component found for type: ${field.type}`);
                        return null;
                    }

                    return(
                        <div key={index}>
                            {errors[field.name] && (
                                <p className="error-message">
                                    {errors[field.name]?.message as string}
                                </p>
                            )}

                            <InputComponent
                                label={field.label}
                                register={register(field.name, field.validation)}
                            />
                        </div>
                    );
                })}

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