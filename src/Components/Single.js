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
        if(this.props.loading === true){
            return <div className="loader">...loading</div>
        }
        else if (post){
            return <div className='single-photo'>
                <Photo post={post} {...this.props} index={index}/>
                <Comment startAddingComment={this.props.startAddingComment} addComment={this.props.addComment} comments={comments} id={id}/>
            </div>
        }else{
            return <h1>... No post found</h1>
        }

    }
}

export default Single