import { BiLogoFacebook } from "react-icons/bi";
import login from '../../assets/images/login/login.svg'
import { AiFillLinkedin } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password);
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="hero py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" w-1/2 mr-12">
                        <img src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 py-10">
                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="name" name="name" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' className="btn btn-primary bg-[#FF3811] border-none" value='Sign Up' />
                            </div>
                            <h1 className="text-center mt-5">Or Sign In with</h1>
                            <div className="flex mx-auto mt-5 gap-5">
                                <button className="btn btn-circle">
                                    <BiLogoFacebook></BiLogoFacebook>
                                </button>
                                <button className="btn btn-circle">
                                    <AiFillLinkedin></AiFillLinkedin>
                                </button>
                                <button className="btn btn-circle">
                                    <FcGoogle></FcGoogle>
                                </button>
                            </div>
                        </form>
                        <h1 className='font-normal text-lg text-center'>Already have an account? <span className='text-[#FF3811]'><Link to={'/login'}>Login</Link></span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;