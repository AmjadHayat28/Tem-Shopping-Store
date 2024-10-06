

const Product = ({finalPro}) => {
  let Proitem=finalPro.map((products,index)=>{
    return(
    <ProductsItem key={index} proData={products}/>
  )
  })
  return (
    <div className="bg-[#DBF4A7]">
    <div className="grid grid-cols-3 gap-4 p-4">
        {Proitem}
      
         
    </div>
    </div>
  )
}

export default Product



const ProductsItem = ({proData}) => {
  // console.log(proData)
  return (
    <div>
      <div className="shadow-lg text-center  bg-[#D5F9DE]  font-bold rounded-lg  ">
            <img  className="mx-auto pt-2 rounded-lg w-[100%] h-[220px]" src={proData.thumbnail} alt="" />
             <h2>{proData.title}</h2>
             <h3>$ {proData.price}</h3>
         </div>
    </div>
  )
}
