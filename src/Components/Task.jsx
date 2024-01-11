import React from 'react'
import { connect } from 'react-redux'
import { ToggleTodo, Del } from '../redux/TodoReducer'

const Task = ({ item, index, ToggleTodo, Del }) => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <input onChange={() => ToggleTodo(item.id)} id={'checkbox' + item.id} type="checkbox" checked={item.completed} style={{ transform: 'scale(1.6)' }} />
                <label htmlFor={'checkbox' + item.id} className='mx-3'>
                    <h3 className='text-light'>{item.title}</h3>
                </label>
            </div>
            <button className='btn btn-danger btn-sm' onClick={() => Del(index)}>del</button>
        </div>
    )
}



export default connect(null, { ToggleTodo, Del })(Task)