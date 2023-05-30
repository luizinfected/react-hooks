import React, { useReducer, useState } from 'react'

const HookUseReducer = () => {

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })


    // 2 - avançando no useReducer

    // nova task
    const [taskText, setTaskText] = useState('')

    // tarefas padrão
    const initialTasks = [
        { id: 1, text: 'fazer algo' },
        { id: 2, text: 'fazer outra coisa' }
    ]

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                };

                setTaskText("");

                return [...state, newTask];

            case "REMOVE":
                return state.filter((task) => task.id !== action.id);
            default:
                return state;
        }
    };
    
    const [tasks, dispatchTask] = useReducer(taskReducer, initialTasks)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTask({ type: "ADD" });
    };

    const removeTask = (id) => {
        dispatchTask({type: "REMOVE", id})
    }

    return (
        <div>
            <h2>useReducer</h2>

            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar número</button>

            <h3>Tarefas:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={taskText} onChange={e => setTaskText(e.target.value)} />
                <input type="submit" value="Enviar"  />
            </form>
            {tasks.map(task => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
            ))}
            <hr />
        </div>
    )
}

export default HookUseReducer