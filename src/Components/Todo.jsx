import React from 'react'
import { useState } from 'react'
import "../style.css"
const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const trimmed = input.trim()
        if (!trimmed) return

        setTodos((prevTodos) => [
            ...prevTodos,
            {
                text: trimmed,
                id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            },
        ])
        setInput('')
    }

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((t) => t.id !== id))
    }

    return (
        <div className='container'>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Add Item'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
            <ul className='todos-list'>
                {todos.map(({ text, id }) => (
                    <li className='todo' key={id}>
                        <span>{text}</span>
                        <button className='close' onClick={() => removeTodo(id)}>
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo