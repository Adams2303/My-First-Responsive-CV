import { useEffect, useState } from "react";


function Form() {
    let [Email, setEmail] = useState('')
    let [Password, setPassword] = useState('')

    function onEmailChange(event) {
        setEmail(event.target.value)

    }

    function onPasswordChange(event) {
        setPassword(event.target.value)

    }

    function onSave(event) {
        event.preventDefault()
        console.log(Email, Password)
    }

    useEffect(() => {
        console.log('component is ready')

    }, [Email, Password])

    return (
        <form onSubmit={onSave}>
            <h3>Login</h3>

            <div>
                <label>Email</label>
                <input onChange={onEmailChange} className="form-control"></input>
            </div>


            <div>
                <label>Password</label>
                <input onChange={onPasswordChange} className="form-control"></input>
            </div>

            <button className="btn btn-primary" style={{ padding: '8px', backgroundColor: 'black', color: 'white', width: '80px' }}>Login</button>
        </form >
    );
}

export default Form