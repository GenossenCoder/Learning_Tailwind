import React from 'react'
import Logo from '../Images/logo.svg'

const Login = () => {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="bg-white/10 rounded-lg h-1/2 2xl:w-1/2  lg:w-2/3 grid grid-rows-2 grid-cols-5 gap-2">
        <div className="row-span-3 col-span-2 bg-rose-500 flex justify-center p-8">
          <img src={Logo} className=""/>
        </div>
        <div className="col-span-3 row-span-2 flex items-center justify-center flex-col ">
          <div className="flex flex-col">
            <h1 className="text-teal-400">Username</h1>
            <input className="p-1 rounded-md"/>
            <h1 className="text-teal-400">Password</h1>
            <input className="p-1 rounded-md"/>
            <button className="w-20 bg-white/25 text-teal-400 mt-2 text-lg rounded-md">Login</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login