import axios from 'axios'

export function getTodos() {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
            dispatch({
                type: 'GET_TODOS',
                payload: res.data
            })
        })

    }
}
export function addTask(InputVal) {
    return (dispatch) => {
        dispatch({
            type: 'Add_Task',
            payload: InputVal
        })
    }

}
export function ToggleTodo(id) {
    return (dispatch) => {
        dispatch({
            type: 'toggleToCompleted',
            id: id
        })
    }

}
export function Del(index) {
    return (dispatch) => {
        dispatch({
            type: 'delTasks',
            id: index
        })
    }

}



export function TodoReducer(state = {
    tasks: [
        { id: 1, title: 'task1', completed: false },
        { id: 2, title: 'task2', completed: false },
    ]
}, action) {
    switch (action.type) {
        case 'GET_TODOS':
            state = {...state, tasks:action.payload }
            break
        case 'Add_Task':
            var arr = [...state.tasks]
            arr.unshift({
                id: state.tasks.length + 1,
                title: action.payload,
                completed: false,
            })
            state = { ...state, tasks: arr }
            break
        case "toggleToCompleted":

            var arr = state.tasks.map((item, index) => {
                if (item.id === action.id) {
                    var item = { ...item, completed: !item.completed }
                }
                return item
            })
            state = { tasks: arr }
            break
        case 'delTasks':
            var tasks = state.tasks
            var Res = tasks.splice(action.id, 1)
            state = {
                ...state,
                tasks: Res
            }

    }
    return state
}