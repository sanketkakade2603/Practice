import {useState} from 'react'

export default function Registration() {

    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name submitted:",name)
        console.log("Email submitted:",email)
        console.log("Password submitted:",password)
    } 
  return (
    <>
    <div className='reg-Container col-12 col-md-6'>
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your name'
            required
            ></input>

            <label>Email:</label>
            <input 
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email'
            required
            ></input>

            <label>Password:</label>
            <input
            type='text'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
            required
            ></input>

            <button className='btn '>Submit</button>
        </form>
    </div>


    </>
  )
}
