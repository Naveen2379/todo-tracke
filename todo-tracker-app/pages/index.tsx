'use client'

import { useState } from "react"
import Login from "../pages/login"




export default function Index() {
    const [isLogInBtnClicked, setIsLogInBtnClicked] = useState(false)

    const handleLogInBtnClick = () => {
        setIsLogInBtnClicked(!isLogInBtnClicked)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button onClick={handleLogInBtnClick}>Login</button>
            {isLogInBtnClicked && <Login />}
        </main>
    )
}
