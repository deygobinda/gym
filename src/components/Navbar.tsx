import logo from "../assets/asset 0.png";

function Navbar() {
  return (
    
    <div className="mx-[270px] flex justify-between py-5">
        <div className="w-28">
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex space-x-8 items-center">
          <div className="text-white text-lg">Advertise</div>
          <button className="px-4 py-1  text-white border border-white rounded-md">
            Login
          </button>
        </div>
      </div>
  );
}

export default Navbar;
