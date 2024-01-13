import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function UpdateUser() {

const {id} = useParams()
const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [age,setAge] = useState()
  const navigate =useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:3001/getUser/"+id)
    .then(res => {console.log(res)
      setName(res.data.name)
      setEmail(res.data.Email)
      setAge(res.data.age)
    })
    .catch(err => console.log(err))
},[])

const Update =( e)=>{
  e.preventDefault()
  axios.put("http://localhost:3001/updateUser/"+id, {name,email,age})
  .then(res => 
    {
    console.log(res)
    navigate('/')
}
  )
  .catch(err => console.log(err))
}

  return (
    <div className='d-flex bg-primary vh-100 justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
      <form onSubmit={Update}>
        <h2>Update User</h2>

        <div className='mb-2'>
          <label htmlFor=''>Name</label>
          <input type='text' placeholder='Name' className='form-control' 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className='mb-2'>
          <label htmlFor=''>Email</label>
          <input type='text' placeholder='Name' className='form-control' value={email} 
              onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className='mb-2'>
          <label htmlFor=''>Age</label>
          <input type='text' placeholder='Name' className='form-control' value={age}
              onChange={(e)=>setAge(e.target.value)}
          />
        </div>
        <button className='btn btn-success'>Update</button>
      </form>
      </div>
      </div>
  )
}

export default UpdateUser