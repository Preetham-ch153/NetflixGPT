import React from "react";
import UserContext from "./UserContext";

class UserClass extends React.Component {
  constructor(props){
    super(props);
    console.log("Child Constructor");

    this.state={
      count:0,
      count2:2,
    }

  }
  componentDidMount (){
    console.log("Child Component did mount");
  }
  componentDidUpdate (){
    console.log("Child Component Did Update");

  }
  componentWillUnmount () {
    console.log("Child Component will unmount");
  }
  
    render() {
      const { Name,Location }=this.props;
      const {count,count2}=this.state;
      console.log("Child Render");


      return(
      <div className="border border-solid border-black">
        <h1>Count: {count}</h1>
        <button onClick={()=>{
          this.setState({
            count:this.state.count + 1,
          });
        }}>Increase Count</button>
        <h2>{Name}</h2>
        <div>
          <UserContext.Consumer>
            {({loggedInUser})=>(
              <h1>{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h3>{Location}</h3>
        <h4>Contact:chinthoju@gmail.com</h4>
      </div>
      );
    }

}

export default UserClass;