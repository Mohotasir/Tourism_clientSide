import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Login = () => {
    document.title = "TourifY | Log in"
    const { signInUser, signInWithGoogle,signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showModal, setShowModal] = useState(false); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;
        signInUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    setShowModal(true);
                    setTimeout(() => {
                        navigate('/');
                        setShowModal(false);

                    }, 1500);

                }
                e.target.reset();
            })
            .catch(error => {
                alert("Login Failed!!")
                console.log(error.message)
            });

    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(()=>{
                
                    setShowModal(true);
                    setTimeout(() => {
                        navigate('/');
                        setShowModal(false);

                    }, 1000);

                
            })
            .catch(error => {
                const errMsg = error.message;
                alert(errMsg);
            });
    };
    const handleGitHubLogin = () =>{
        signInWithGithub()
         .then(()=>{
                
            setShowModal(true);
            setTimeout(() => {
                navigate('/');
                setShowModal(false);

            }, 1000);

        
    })
    .catch(error => {
        const errMsg = error.message;
        alert(errMsg);
    });
       

    }

    return (
        <div className="l-bg min-h-[90vh] flex flex-col items-center justify-center">
           
            <div className=" bg-white p-8 rounded-lg mb-8 shadow-lg w-full max-w-md"data-aos="zoom-in" data-aos-duration='1000'>
                <h2 className="text-3xl font-semibold text-center g-color mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block g-color text-sm font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block g-color text-sm font-semibold mb-2" htmlFor="password">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700 pr-10"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                        <button
                            type="button"
                            className="absolute top-9 right-0 flex items-center justify-center px-3 bg-transparent focus:outline-none"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash className="h-5 w-5 text-black" /> : <FaEye className="h-5 w-5 text-black" />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full t-bg font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                    <p className='text-gray-700 text-sm py-2 '>Don't have any account? please <Link className='underline text-blue-600' to="/register">register</Link> </p>
                    <div className="text-black flex text-3xl items-center justify-center gap-2 pt-2 border-t-2 my-6">
                        <div onClick={handleGoogleLogin} className='hover:bg-gray-200 p-2 cursor-pointer rounded-full'><FcGoogle /> </div>
                        <p className='text-lg font-bold'>or</p>
                        <div onClick={handleGitHubLogin} className='hover:bg-gray-200 p-2 cursor-pointer rounded-full'><FaGithub /></div>
                    </div>
                </form>
            </div>
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white flex flex-col items-center justify-center p-5 md:p-12 rounded-lg shadow-lg text-black">
                    <div className='py-2 t-clr text-5xl font-semibold'><IoMdCheckmarkCircleOutline /></div>
                    <p className="text-2xl t-clr font-semibold mb-2">Login Successful!</p>
                    <p className='text-sm'>You have successfully logged in!</p>
                </div>
            </div>
            )}
          

        </div>
    );
};

export default Login;
