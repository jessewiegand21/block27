import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import './App.css'

function App() {
 const [username, setUsername] = useState("")
const [token, setToken] = useState(null);

  return (
    <>
    
    <SignUpForm username={username} setUsername={setUsername} token={token} setToken={setToken}/>
    <Authenticate username={username} token={token} setToken={setToken}/>

    </>
  )
}

export default App
