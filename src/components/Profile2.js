import { Component } from "react";

class Profile2 extends Component{
    constructor(props){
      super(props);
      this.state = {
        name:'Pratham',
        count:0,
        count2:0
      }
      console.log('Child Profile2 constructor');
    }
    componentDidMount(){
       this.timer = setInterval(()=>{
            console.log('SET INTERVAL');
        },1000);
        console.log('Child Profile2 componentDidMount');
    }
    componentDidUpdate(){
        console.log('Child Profile2 componentDidUpdate');
    }

    componentWillUnmount(){
       clearInterval(this.timer);
    }
    render(){
        console.log('Child Profile2 render');
        return <>
          <h2>It is class based profile component</h2>
          <h2>Name: {this.state.name}</h2>
          <button onClick={()=>this.setState({name:'Pratiksha'})}>Change Name</button>
          <br/>
          <button onClick={()=>this.setState({count:this.state.count+1})}>Count {this.state.count}</button>
          <br/>
          <button onClick={()=>this.setState({count2:this.state.count2+1})}>Count2 {this.state.count2}</button>
        </>
    }
}
export default Profile2;