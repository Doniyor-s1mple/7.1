import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Task from './Task'
import { getTodos } from '../redux/TodoReducer'


const TaskBody = ({ tasks, getTodos }) => {


    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div>
            {tasks.map((item, index) => <Task key={index} item={item} index={index} />)}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tasks: state.TodoReducer.tasks
    }
}


export default connect(mapStateToProps, { getTodos })(TaskBody)