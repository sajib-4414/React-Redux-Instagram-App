import {React, Component} from "react";
import Title from "./Title";
import Photowall from "./PhotoWall";
import { Route } from "react-router-dom";
import { removePost } from "../redux/actions";
import AddPhoto from "./AddPhoto"
import { Link } from 'react-router-dom'
import Single from "./Single";

class Main extends Component{
   
    //this.props.dispatch()
    render(){
        return(
            <div>
                <h1><Link to="/">PhotoWall</Link></h1>
                <Route exact path="/"  render={ ()=>(
                    <div>
                
                        <Photowall 
                        {...this.props} //passing all props from main to photowall
                        />
                    </div>
                )}/>

                <Route path="/AddPhoto" render={({ history }) => {
                        return (
                            <AddPhoto {...this.props} />
                            );
                    }} />
                
                <Route path={"/single/:id"} render={(params) => (
                    <Single  {...this.props} {...params}/>
                )}/>
            </div>
            
        )
    }
}

export default Main