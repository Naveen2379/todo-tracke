import React, { useState } from "react";

const Login = () => {
    const [isLogInBtnClicked, setIsLogInBtnClicked] = useState(false)

  const handleLogInBtnClick = () => {
    setIsLogInBtnClicked(!isLogInBtnClicked)
  }

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    console.log('data ', e.target[0].value)
    console.log('data ', e.target[1].value)
    console.log('data ', e.target)
  }
    return (
        <div>{
            !isLogInBtnClicked ?
              <button onClick={handleLogInBtnClick}>
                Login
              </button> : <div>
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
              </div>
          }
          </div>
    )
}

export default Login;