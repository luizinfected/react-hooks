import React, { useState } from 'react'

const HookUseState = () => {

    //1 - useState
    const [name,setName] = useState('Luiz')

    const [email, setEmail] = useState('')

    const handleAction = (e) => {
        e.preventDefault()
        setName('Luiz Enrique')
    }

    return (
        <div>
                {/* 1 - useState */}
                <h2>useState</h2>
                <p>nome: {name}</p>
                <button onClick={handleAction}>Mudar nome</button>
                <h3>UseState com input</h3>
                <input type="text" onChange={e => setEmail(e.target.value)} />
                <p>email: {email}</p>
                <hr />
        </div>
    )
}

export default HookUseState