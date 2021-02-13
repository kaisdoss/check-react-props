import React from "react";



class ClassCompo extends React.Component{

state={
    name:'rahma'
}

ChangeState=()=>{
   this.setState({
       name: 'doss'
   })
}

render (props){
console.log(this.props);
    return(
        <div>
        <h1> {this.state.name} </h1>
    <button onClick={this.ChangeState} >ChangeState</button>
        <h1>Name: {this.props.Fname} </h1>
        <button onClick={this.props.propsFunction} > click</button>
        </div>
    )
}

}




export default ClassCompo
