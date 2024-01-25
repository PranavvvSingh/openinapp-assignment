import { useState } from "react"
import google from "../assets/google.png"
import apple from "../assets/apple.png"
import { FaGithub } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import { IoLogoDiscord } from "react-icons/io5"
import { NavLink } from "react-router-dom"

const Login = () => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
  return (
     <div className="flex flex-row h-screen">
        <div className="w-1/2 overflow-hidden relative">
           <div className="bg-indigo-500 h-screen w-full rotate-12 -translate-x-40 -translate-y-9 scale-[1.3]"></div>
           <div className="absolute bottom-5 w-[75%] justify-center flex text-white text-3xl gap-5">
              <FaGithub />
              <AiFillTwitterCircle />
              <FaLinkedin />
              <IoLogoDiscord />
           </div>
        </div>
        <div className="w-1/2">
           <form className="flex flex-col justify-center gap-6 h-screen w-[400px] mx-auto">
              <div className="text-left">
                 <h1 className="text-3xl">Sign In</h1>
                 <h2>Sign in to your account</h2>
              </div>
              <div className="flex justify-between">
                 <button className="border rounded-md p-2">
                    <img src={google} className="h-[20px] inline-block mr-1" />
                    Sign in with Google
                 </button>
                 <button className="border rounded-md p-2">
                    <img src={apple} className="h-[20px] inline-block mr-1" />
                    Sign in with Apple
                 </button>
              </div>
              <div className="flex flex-col">
                 <label htmlFor="">Email</label>
                 <input type="text" className="bg-neutral-200 p-2 rounded-md" />
              </div>
              <div className="flex flex-col">
                 <label htmlFor="">Password</label>
                 <input type="text" className="bg-neutral-200 p-2 rounded-md" />
              </div>
              <p className="text-blue-500 text-sm">Forgot password?</p>
              <NavLink
                 to="upload"
                 className="p-2 bg-indigo-500 rounded-md text-center"
              >
                 Sign In
              </NavLink>
              <p className="text-sm text-center">
                 Dont have an account?{" "}
                 <span className="text-blue-500 text-sm">Register here</span>
              </p>
           </form>
        </div>
     </div>
  )
}

export default Login