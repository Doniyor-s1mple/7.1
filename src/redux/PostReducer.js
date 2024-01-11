import axios from 'axios'

export function getPosts() {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            dispatch({
                type: "GET_POSTS",
                payload: res.data
            })
        })
    }

}

export function PostReducer(state = {
    Posts: []
}, action) {
    switch (action.type) {
        case 'GET_POSTS':
            state = { ...state, Posts: action.payload }
            break
    }
    return state
}