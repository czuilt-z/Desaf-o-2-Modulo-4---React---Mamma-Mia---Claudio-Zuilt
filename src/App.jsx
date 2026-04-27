import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Main from './components/Main'
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"
// import { useState } from "react"

function App() {

  return (
    <>
      <NavBar />
      <section className='App-container'>
        
        <Home />
        {/* <Main /> */}
        <div className="Forms-container">
          <LoginForm />
          {/* <RegisterForm /> */}
        </div>
        <Footer />
      </section>
    </>
  )
}

export default App
