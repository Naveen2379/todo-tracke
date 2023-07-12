import React, { useState } from "react";

const Login = () => {



  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    console.log('data ', e.target[0].value)
    console.log('data ', e.target[1].value)
    console.log('data ', e.target)
  }
  return (

    <form onSubmit={handleFormSubmit}>
      <label>Name
        <input type="text"
          //value={} 
          onChange={(e) => e.target.value}
        />
      </label>
      <label>password
        <input type="password"
          //value={} 
          onChange={(e) => e.target.value}
        />
      </label>
      <button type="submit">submit</button>
    </form>
  )
}

export default Login;