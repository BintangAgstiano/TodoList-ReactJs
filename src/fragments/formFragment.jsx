// File 1 - FormFragment.jsx
import React, { useEffect, useState } from 'react';
import Button from "../components/button";
import Input from "../components/input/input";


const FormFragment = () => {
    const [lineThrough, setLineThrough] = useState({});
    const [list, setList] = useState([])
    const handleClickCB = (index) => {
        setLineThrough(prev => ({
            ...prev, [index]: !prev[index]
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        let input = e.target.inputActivity.value
        console.log(input);
        if (input.length > 0) {
            if (JSON.parse(localStorage.getItem("Activity")) == input) {
                alert("List sudah tersedia")
                return false;
            } else {
                const arrList = [...list, input];
                setList(arrList);
                localStorage.setItem("Activity", JSON.stringify(arrList))
            }
        }else{
            alert("Isi aktifitas anda")
        }

    }
    useEffect(() => {
        let getItem = localStorage.getItem("Activity")
        setList(JSON.parse(getItem) || [])
    }, [])

    const handleDelete = (index) => {
     let newList=[...list];
     newList.splice(index,1)
setList(newList)
localStorage.setItem("Activity",JSON.stringify(newList))
    }
    return (
        <>
            <div id='col' className="mt-14">
                <form action="" className="flex  mb-8" onSubmit={handleSubmit}>
                    <Input id="inputActivity" name="inputActivity" className="l border px-5 py-2 w-full" type="text" placeholder="Input your activity sayangg...." />
                    <Button type="submit" className="py-1 px-7 bg-slate-950 text-white" >Add</Button>
                </form>
            </div>

            <div>
                {list.map((item, index) => {
                    return (
                        <>
                            <div key={index} id="content" className=" rounded-3xl py-3 font-medium text-slate-900 mt-5 font-sans flex w-full justify-between">
                                <span className="ml-7  text-slate-900 flex ">
                                    <div className="parentCb">
                                        <input type="checkbox" className='cb' name="" id={`cb-${index}`} onChange={() => handleClickCB(index)} />
                                    </div>
                                    <span className={lineThrough[index] ? "line-through" : ""}>{item}</span>
                                </span>
                                <Button type="submit" onclick={()=>handleDelete(index)} className="mr-7  text-red-700 ">Hapus</Button>
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    );
};

export default FormFragment;
