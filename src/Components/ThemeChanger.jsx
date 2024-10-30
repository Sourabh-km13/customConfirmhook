import React, { useState } from "react"
import Confirmhook from "../hooks/Confirmhook"

export default function ThemeChanger({ setComponent }) {

  const color = { dark: '#021729', light: 'ghostwhite' }
  const [theme, settheme] = useState(true)
  const handleClick = () => {
    const { promise, Component } = Confirmhook()
    setComponent(()=>Component)
    promise
    .then(() => {
      settheme((prev) => !prev)
      document.querySelector('body').style.backgroundColor = theme ? color.light : color.dark;
      setComponent(() => null)
    }
    )
    .catch((error)=>{
      console.log(error);
      setComponent(() => null)
    })

  }
  return (
    <>
      <div className="mx-8 my-8 w-fit border-blue-500 border-2 rounded-lg shadow-md">
        <button 
        className="text-xl text-black bg-blue-200"
        onClick={handleClick}>ChangeTheme</button>
      </div>
    </>
  )
}
