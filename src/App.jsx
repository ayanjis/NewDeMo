import { useState } from 'react'
import Header from './component/Header.jsx'
import Body from './component/Body.jsx'
import Footer from './component/Footer.jsx'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default App
