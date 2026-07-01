import React, { useState } from 'react'

const Register = () => {
const [name, setname] = useState("")
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
 const handlesubmit=async(e)=>{
    e.preventDefault()
    const response=await fetch("http://localhost:5000/api/users",{
              method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            password
        })
    });
    const data=await response.json()
    console.log(data)




 }
  return (
    <div className='min-h-screen p-4 shadow-2xl flex flex-col w-screen items-center justify-center  ' >
        <div className='border-3 rounded-3xl shadow-2xl'>

        <div className='text-2xl text-center '>Register Form</div>
        <form className='flex flex-col p-6 gap-3' onSubmit={handlesubmit}>
            Name:<input type="text" value={name}  onChange={(e)=>setname(e.target.value)}placeholder="Enter your name"></input>
            Password:<input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Enter the password'></input>
            Email:<input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter the email'></input>
            <button  className='bg-blue-600 hover:bg-blue-700 text-blue-400 font-medium py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out'>Submit</button>
        </form>
    </div>
            </div>
  )
}

export default Register