
import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("red")
  const changeColor = (color) => {
    setBgColor(color)
  }
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ width: '100%', height: '100vh' }}>
        <div className="inner-box d-flex  justify-content-between align-items-center " style={{ width: '600px', height: '400px', backgroundColor: bgColor }}>

          <button onClick={() => changeColor('green')} className='btn shadow button  btn-1' >Green</button>
          <button onClick={() => changeColor('blue')} className='btn button btn-2' >Blue</button>
          <button onClick={() => changeColor('orange')} className='btn button btn-3' >Orange</button>
          <button onClick={() => changeColor('purple')} className='btn button btn-4' >Purple</button>
          <button onClick={() => changeColor('brown')} className='btn button btn-5'>Brown</button>


        </div>
      </div>
    </>
  )
}

export default App
