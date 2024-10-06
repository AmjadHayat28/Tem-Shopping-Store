import facebook from'../assets/images/facebook.png'
import insta from'../assets/images/insta.png'
import logo from'../assets/images/Amjadlogo.svg'

const Footer = () => {
  return (
    <div>
           <div className=" flex items-center flex-col  bg-[#E6FDFF] pt-24 " id="contacts">
        <div className="flex  items-center justify-evenly w-[100%] ">
            <div><img src={logo} alt=""  className='h-36 w-36'/></div>
            <div>
                <p className='font-bold'>Tem Store </p>
                <p>15791 Rockfield Blvd. Suite D,</p>
                <p>Irvine, CA 92618</p>
                <p> <i className="fa-solid fa-phone py-4 mr-2"></i>678.901.2345</p>
                <p><i className="fa-solid fa-envelope py-4 mr-2"></i> info@tema.com</p>
            </div>
            <div>
                <p> <i className="fa-solid fa-angle-right p-3 "></i><a href="#home">Home</a></p>
                <p> <i className="fa-solid fa-angle-right p-3 "></i>Products</p>
                <p> <i className="fa-solid fa-angle-right p-3 "></i>About</p>
                <p> <i className="fa-solid fa-angle-right p-3 "></i>Contact</p>
            </div>
            <div>
                <div> <button className="bg-[#4ba647] w-[322px] h-[54px] rounded-[3px] flex items-center justify-center  hover:bg-green-900 text-white">Get Free Estimate</button></div>
                <div className="flex gap-7 py-8 px-5">
                    <div className="flex gap-2"><img src={facebook} alt="fb" />Facebook</div>
                    <div className="flex gap-2"><img src={insta} alt="insta" />Intsagram</div>
                </div>
                
            </div>
        </div>
        <div className=" mt-32 mb-20">© Copyright 2024 | Amjad Hayat | Tema International Store | All rights reserved</div>
        
     </div>
    </div>
  )
}

export default Footer
