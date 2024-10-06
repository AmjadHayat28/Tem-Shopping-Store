import axios from "axios"
import Category from "./components/Category"
import Product from "./components/Product"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"


const App = () => {

  let [finalCat,setFinalCat]=useState([])
  let [finalPro,SetFInalPro]=useState([])
  let [catName,setCatname]=useState('')
// category API

let getCategory=()=>{
  axios.get('https://dummyjson.com/products/category-list')
.then((res) => res.data)
.then((finalres)=>{
  console.log(finalres)
  setFinalCat(finalres)
});
}

//Product API
let getProduct=()=>{
  axios.get('https://dummyjson.com/products')
  .then((proRes)=>proRes.data)
  .then((finalProRes)=>{
    // console.log(finalProRes.products)
    SetFInalPro(finalProRes.products)
  })
}



//Use Effect State
useEffect(()=>{
  getCategory();
getProduct();
},[])

//category wise useEffect
useEffect(()=>{
  if(catName!==""){
    axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((proRes)=>proRes.data)
    .then((finalProRes)=>{
      // console.log(finalProRes.products)
      SetFInalPro(finalProRes.products)
    })
  
  }
},[catName])

  return (
    <div>
      <Navbar/>
      <div className="py-[40px] bg-[#8AA399] pr-8">
      <div className="max-w-[1320px] mx-auto">
        <h1 className="text-center font-bold text-4xl  font-serif m-8 text-[#2A2A72]"> Tem Shopping Store</h1>
        <div className="grid grid-cols-[30%_auto] gap-5">
          
          <Category finalCat={finalCat} setCatname={setCatname}/>
          <Product finalPro={finalPro}/>
          
        </div>

      </div>

      
    </div>
    <Footer/>
    </div>
  )
}

export default App
