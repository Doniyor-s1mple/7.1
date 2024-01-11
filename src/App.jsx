import React from 'react'
import Todos from './Pages/Todos'
import { Link, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Posts from './Pages/Posts'


const App = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-6 offset-3">
                    <Link to='/todos' className='btn btn-success'>Todos</Link>
                    <Link to='/posts' className='btn btn-warning mx-5'>Posts</Link>

                </div>
            </div>
            <div className="row my-5">
                <div className="col-12">
                    <Switch>
                        <Route path='/todos' component={Todos} />
                        <Route path='/posts' component={Posts} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default App