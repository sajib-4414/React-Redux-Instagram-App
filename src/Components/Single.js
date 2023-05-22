import {Component} from "react";
import React from "react";
import Photo from "./Photo";
import Comment from "./Comment";
class Single extends Component{
    render(){
        const {match, posts} = this.props
        const id = Number(match.params.id)
        const post = posts.find((post) => Number(post.id) === id);
        const comments = this.props.comments[id] || []
        const index  = this.props.posts.findIndex((post) => Number(post.id) === id)
        return <div className='single-photo'>
            <Photo post={post} {...this.props} index={index}/>
            <Comment addComment={this.props.addComment} comments={comments} id={id}/>
        </div>
    }
}

export default Single