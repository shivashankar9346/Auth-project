import React from 'react'

const home = () => {
  return (
    <div className='body-container'>
        <h1>Welcome to Auth Simulation</h1>
        <p>The project demonistrates how to use <strong>React Context</strong> to manage global authentication and preotect <br /> routes using <strong>React Router</strong></p>
        <div className='topics-content'>
            <h2>Concepts Covered</h2>
            <p>Context API & useContext</p>
            <p>Protected Routes</p>
            <p>Custom Hook(useAUTH)</p>
            <p>Conditional Rendering</p>
        </div>
    </div>
  )
}

export default home