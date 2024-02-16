const Button=(props)=>{
    const{
type,
className,
children,
onclick
    }=props
    return(
        <>
         <button type={type} className={className} onClick={onclick}>{children}</button>
        </>
    )
}
export default Button