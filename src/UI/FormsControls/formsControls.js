import React from "react";
import style from "./formsControl.module.css"

export const Input = ({input, meta, ...props})=>{

    let hasError = !!meta.error && !!meta.touched


    return <>

        <input className={ hasError && style.error} {...input} {...props}  />
    </>
}