export default function Registrer({user, setUser}){
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    const handleChange = (e) =>{
        const inputName = e.target.name
        const inputValue = e.target.value
        setUser((prev) => ({...prev, [inputName]: inputValue}))
    }
    const handleClick = () =>{
        user.password === user.checkpass ? console.log("Laget bruker") : console.log("passordene er ikke like!")
    }
    return (
        <form>
            <label htmlFor="username">Lag et brukernavn:</label>
            <input id="username" name="username" placeholder="Nora Nordman" type="text"></input>
            <label htmlFor="password">Lag et passord:</label>
            <input id="password" name="password" placeholder="****" type="password" onChange={handleChange}></input>
            <label htmlFor="checkpass">Bekreft passord:</label>
            <input id="checkpass" name="checkpass" placeholder="****" type="password" onChange={handleChange}></input>
            <button onClick={handleClick} type="submit">Registrer</button>
        </form>
    )
}