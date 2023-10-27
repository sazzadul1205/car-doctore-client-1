import { BiLogoFacebook } from "react-icons/bi";
import login from '../../assets/images/login/login.svg'
import { AiFillLinkedin } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from 'axios';

const LogIn = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email }

                // get access token
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })

            })
            .catch(error => console.log(error))
    };

    return (
        <div>
            <div className="hero py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" w-1/2 mr-12">
                        <img src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 py-10">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-5xl font-bold text-center">Login</h1>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' className="btn btn-primary bg-[#FF3811] border-none" value='login' />
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
                        <h1 className='font-normal text-lg text-center'>Have an account? <span className='text-[#FF3811]'><Link to={'/signUp'}>Sign Up</Link></span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;