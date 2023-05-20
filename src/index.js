import {React, Component} from 'react';
import  ReactDOM  from 'react-dom/client';


class List extends Component{
    render(){
        return (
        <ol> 
            {this.props.tasks.map((task,index) => <li key={index}>{task}</li>)}
        </ol>
        )
    }
}
class Title extends Component{
    render(){
        return (
            <h1>{this.props.title}</h1>
        )
    }
}
class Main extends Component{
    render(){
        return(
            <div>
                <Title title={'todos'}/>
                <List tasks={['Mow the lawn','walk the dog']}/>
                <List tasks={['hose the driveway','Finish the laundry']}/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>);