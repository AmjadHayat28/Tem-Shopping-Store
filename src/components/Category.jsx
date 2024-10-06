

const Category = ({finalCat,setCatname}) => {

let Cat=finalCat.map((v,i)=>{
  return(
  <li onClick={()=>setCatname(v)} key={i}  className="bg-[#7D84B2] p-3 font-[500]  hover:bg-[#6470ba] text-[20px] mb-3 rounded-[8px] cursor-pointer">{v}</li>
)
})

  
  return (
    <div className="bg-[#8FA6CB]">
      <h1 className="text-2xl font-bold text-center font-serif p-4">Category</h1>
      <ul className=" p-4">
        {Cat}

      </ul>
    </div>
  )
}

export default Category


