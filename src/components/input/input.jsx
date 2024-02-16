const Input=(props)=>{
    const{
        id,
        className,
        type,
        placeholder,
        name
    }=props
    return(
        <>
       <input id={id} className={className} name={name} type={type} placeholder={placeholder} />
        </>
    )
}
export default Input