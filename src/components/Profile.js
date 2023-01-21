import {Component} from "react";
class Profile extends Component{
    constructor(props){
      super(props);
      this.state = {
        userInfo:null
      }
      console.log('Child Profile constructor');
    }
    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/rameshsoftdev');
        const json = await data.json();
        this.setState({
            userInfo:json
        });
        console.log('Child Profile componentDidMount');
    }
    render(){
        console.log('Child Profile render');
        return <>
          <h2>It is class based profile component</h2>
          <h2>Name: {this.state.userInfo?.login}</h2>
          <img src={this.state.userInfo?.avatar_url} width="200"/>
          <br></br>
          <button onClick={()=>this.setState({name:'Rathod'})}>Change Name</button>
        </>
    }
}
export default Profile;