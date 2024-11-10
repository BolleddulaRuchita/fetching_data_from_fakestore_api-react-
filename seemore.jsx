import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Seemore(){
var [data,setdata]=useState({})
var [val,setval]=useState({})

    var i=useParams()
    console.log(i);
    useEffect(()=>{
axios.get("https://fakestoreapi.com/products/"+i.id).then((res1)=>{
    console.log(res1.data);
    setdata(res1.data)
    setval(res1.data)
})
},[])
    return (
        <>
        <h1>its see more {i.id} </h1>
        <div> 
                <h1>{val?.id}</h1>
                <h1>{val?.title}</h1>
                <h1>{val?.price}</h1>
                <img src={val?.image} width={100} height={100} alt="" />
            </div>
        </>
    )
}
export default Seemore;