import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg'

const Navbar = () => {
    const link = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/services'}>Services</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 h-28 mb-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <BsFillBagFill className="text-3xl mr-3"></BsFillBagFill>
                    <AiOutlineSearch className="text-3xl mr-3"></AiOutlineSearch>
                    <button className="btn btn-outline btn-warning border-[#FF3811] ">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;