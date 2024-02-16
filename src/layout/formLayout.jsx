import FormFragment from "../fragments/formFragment"


const FormLayout=()=>{
    
    return(<>
 
                <div id="colLayout" className="flex flex-col w-2/4  h-5/6 ">
                    <div>
                        <h1 id="judul" className="font-sans font-semibold text-3xl text-slate-900">TODO LIST APP</h1>
                        <div id="desc" className="px-2 py-1 rounded text-white mt-3 bg-cyan-950 w-max" >Do it now</div>
                    </div>
                   <FormFragment/>
                </div>
    </>)
}
export default FormLayout