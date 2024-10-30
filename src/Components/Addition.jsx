import { React, useState } from "react"
import Confirmhook from "../hooks/Confirmhook"

export default function Addition({ setComponent }) {
  const [num1, setnum1] = useState(null)
  const [num2, setnum2] = useState(null)
  const [ans, setans] = useState("_")
  const [disabled, setdisabled] = useState(false)
  const handleConfirm = () => {
    const { promise, Component } = Confirmhook()
    setComponent(() => Component) // Render the component
    setdisabled((prev) => !prev)
    // Handle promise resolution or rejection
    promise
      .then(() => {
        setans(Number(num1) + Number(num2))
        setComponent(() => null)
        setdisabled((prev) => !prev)
      })
      .catch((error) => {
        console.log(error)
        setComponent(() => null)
        setdisabled((prev) => !prev)
      })
  }
  return (
    <div
      className={`
        px-4 py-2 border-solid border-2 w-fit mx-8 my-8
        border-blue-500 rounded-lg bg-blue-200 text-cyan-600
        shadow-md shadow-blue-500
         ${disabled ? "bg-gray-400" : null}`}
    >
      <h2>ADD TWO NUMBERS</h2>
      <div className="py-2 flex gap-4">
        <input
          placeholder="enter number"
          className="w-24 my-2 py-1 px-4 rounded-md"
          onChange={(e) => {
            setnum1(e.target.value)
          }}
          type="number"
          disabled={disabled}
        />
        <input
          placeholder="enter number"
          className="w-24 my-2 py-1 px-4 rounded-md"
          onChange={(e) => {
            setnum2(e.target.value)
          }}
          type="number"
          disabled={disabled}
        />
      </div>
      <div className="text-xl ">Result:{ans}</div>
      <button  onClick={handleConfirm}>Add</button>
    </div>
  )
}
