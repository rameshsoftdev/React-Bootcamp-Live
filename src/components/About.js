import { Component } from "react";
import Profile from "./Profile";
import Profile2 from "./Profile2";
import FunctionalProfile from "./FunctionalProfile";

class About extends Component{
    constructor(props){
       super(props);
       console.log('Parent constructor');
    }
    componentDidMount(){
        console.log('Parent componentDidMount');
    }
    render(){
        console.log('Parent render');
        return <>
        <div>
            <h2>About component</h2>
            <Profile name="Ramesh"/>
            <Profile2 name="Ramesh"/>
            <FunctionalProfile />
        </div>
     </>
    }
}
export default About;