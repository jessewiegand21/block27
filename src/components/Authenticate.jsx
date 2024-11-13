import { useState } from "react"


export default function Authenticate({token, username}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    
    async function handleClick() {
        console.log("Clicked!")

        console.log(token);
        try { 

            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            const result = await response.json();
            console.log(result.data.username);
           
            setSuccessMessage(result.message);
            console.log(result);
        } catch (error) {
            setError(error.message)
        }
    }
    return (
    <>
    <h2>Authenticate!</h2>
    {successMessage && <p>{successMessage}</p>}
    {successMessage && <div>Welcome {username}</div>}
    {error && <p>{error}</p>}
    <button onClick={handleClick}>Authenticate Token</button>
    </>
    )
  }