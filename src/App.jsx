import React, { useState } from "react";
import "./index.css"
import Addition from "./Components/Addition";
import ThemeChanger from "./Components/ThemeChanger";

function App() {
 const [Component, setcomponent] = useState(null)

  return (
    <>
    <Addition setComponent={setcomponent}/>
    <ThemeChanger setComponent={setcomponent}/>
    {Component&& <Component/>}
    </>
  )
}

export default App;
