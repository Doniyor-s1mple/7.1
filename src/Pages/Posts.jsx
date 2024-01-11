import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../redux/PostReducer'

const Posts = ({ Posts, getPosts }) => {

    useEffect(() => {
        getPosts()
    }, [])
    return (
        <div className='col-12'>
            {Posts.map((item, index) => <div key={index} className='col-5 bg-dark'>
                <div className="card bg-dark text-light">
                    <div className="card-body">
                        {item.id}
                        {item.title}
                    </div>
                </div>
            </div>)}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        Posts: state.PostReducer.Posts
    }
}


export default connect(mapStateToProps, { getPosts })(Posts)