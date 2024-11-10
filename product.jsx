import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Product(){

var [see,setsee]=useState([])
var [fil,setfil]=useState([])
    useEffect(()=>{
   axios.get("https://fakestoreapi.com/products").then((res)=>{
   
    setsee(res.data)
    setfil(res.data)
   })
    },[])


var sub=(e)=>{
e.preventDefault()
console.log(e.target.value);
var res=see.filter((val,ind)=>{
return val.category==e.target.value
})
setfil(res)
console.log(res);
}
var ress=fil.map((val,ind)=>{
    return(
        <>
        <tr key={ind}>
            <td>{val.id}</td>
            <td>{val.category}</td>
            <td>{val.price}</td>
            <td><img src={val.image} alt="" width={100} height={100} /></td>
            <td><button><Link to={`/product/${val.id}`}>seemore</Link></button></td>
        </tr>
        </>
    )
})
// order=(e)=>{
//     e.preventDefault()
//     console.log("hi");
// }
var desc=()=>{
    var b=[...fil]
    b.sort((a,b)=>{
      return b.price-a.price
    })
    setfil(b)
}

var asc=()=>{
    var b=[...fil]
    b.sort((a,b)=>{
      return a.price-b.price
    })
    setfil(b)
}

return (
    <>
  
    <form action="" onChange={sub}>
    <select name="" id="">
        <option value="men's clothing">men</option>
        <option value="women's clothing">women</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
    </select>
    <input type="submit" value='submit' name="" id="" />
</form>
<button onClick={desc}>high to low</button>
<button onClick={asc}>low to high</button>

{/* <form action="" onSubmit={order }>
    <select name="" id="">
        <option value="asc" >low-high</option>
        <option value="dec">high-low</option>
    </select>
    <input type="submit" value='submit' name="" id="" />
</form> */}


    <h1>products</h1>
    <table border={1}>{ress}</table>
    </>
)
}
export default Product;