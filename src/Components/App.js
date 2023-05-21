import Main from './Main'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import { useDispatch } from 'react-redux';
import { withRouter } from "react-router";
function mapStateToProps(state){
    return {
        posts: state
    }
}

function mapDispathToProps(dispatch){
    return bindActionCreators(actions, dispatch)
}

const App = withRouter( connect(mapStateToProps, mapDispathToProps)(Main))

export default App