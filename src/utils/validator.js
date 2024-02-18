export const required = (value)=>{

    if(value) return undefined;

    return "Field is required"
}

export const maxLengthCreator = (length)=> (value)=>{

    if(value.length > 30) return `Max length is ${value}`;

    return undefined;
}