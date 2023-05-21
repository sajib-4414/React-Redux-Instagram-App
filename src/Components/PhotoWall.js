import {React} from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function PhotoWall(props){
    return <div>
        {/* #AddPhoto is URL fragment */}
        <Link className='addIcon' to='AddPhoto'></Link>
    <div className='photoGrid'> 
            {props.posts.
            sort( function(x,y){
                return y.id-x.id
            }).
            map((post, index) => <Photo post={post} index={index} {...props} key={post.id}
              />)}
        </div>
        </div>
}
PhotoWall.propTypes = {
    posts:PropTypes.array.isRequired
}
export default PhotoWall;