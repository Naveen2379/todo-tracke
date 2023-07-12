'use client'
import { useState } from "react"

export default function Home() {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>To Do Tracker</h2>
      {
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
    </main>
  )
}
