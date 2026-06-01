import { Controller, type Control, type FieldError, type Path } from "react-hook-form";
import './CustomInput.css'
import type { FormValues } from "../models";
interface Props  {
    name: keyof FormValues; // tambien puede ser Path<FormValues>
    control: Control<FormValues>;
    label: string;
    type?: string;
    error?: FieldError;
}

const InputForm = ({ name, control, label, type, error }: Props) => {
    
    return (
        <div className="form-group">
                <label htmlFor= {name}>{label}</label>
                <Controller
                    name= {name}
                    control={control}
                    render={({ field }) => <input className={`form-control ${error ? "is-invalid" : ""}`} id={name} type={type} {...field}  />}
                />
                {error && <p className="error">{error.message}</p>}
            </div> 
    )
}

export default InputForm;