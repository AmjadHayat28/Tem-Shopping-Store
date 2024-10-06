import logo from'../assets/images/Amjadlogo.svg'

const Navbar = () => {
  return (
    <div>
       <nav className="bg-[#E6FDFF] flex justify-evenly items-center h-[120px] ">
        <div className="flex items-center gap-12">
          <img src={logo} alt="logo" className='w-32 h-32 mr-44'/>
            <ul className="flex  gap-12 items-center">
                <li><a href="" id="home">Home</a></li>
                <li><a href="">Products <i className="fa-solid fa-angle-down"></i></a></li>
                <li><a href="#contacts">About</a></li>
                <li><a href="#contacts">Contact</a></li>
            </ul>
        </div>
        <div>
            <button className="bg-[#4ba647] w-[322px] h-[54px] rounded-[3px] flex items-center justify-center  hover:bg-green-900 text-white">Get Free Estimate</button>
        </div>
     </nav>
    </div>
  )
}

export default Navbar
