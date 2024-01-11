import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../redux/TodoReducer'

const TaskHeader = ({ addTask }) => {

    const [InputVal, setInputVal] = useState("")

    const getInputVal = (e) => {
        setInputVal(e.target.value)
    }

    var AddTask1 = () => {
        if (InputVal) {
            addTask(InputVal)
            setInputVal('')
        }
    }
    return (
        <div className='d-flex col-4'>
            <input type="text" value={InputVal} onChange={getInputVal} className='form-control' />
            <button className='btn btn-success mx-2' onClick={AddTask1}>add</button>
        </div>
    )
}



export default connect(null, {addTask})(TaskHeader)