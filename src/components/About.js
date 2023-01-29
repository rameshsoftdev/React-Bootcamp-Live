import { Component } from "react";
import Profile from "./Profile";
import Profile2 from "./Profile2";
import FunctionalProfile from "./FunctionalProfile";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <>
        <div>
          <h2>About component</h2>
          <Profile name="Ramesh" />
          <Profile2 name="Ramesh" />
          <FunctionalProfile />
          <UserContext.Consumer>
            {({ userinfo }) => (
                <h4 className="font-bold text-xl p-10">
                {userinfo.username}- {userinfo.useremail}
              </h4>
            )}
          </UserContext.Consumer>
        </div>
      </>
    );
  }
}
export default About;
