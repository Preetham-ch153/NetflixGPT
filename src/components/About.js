import User from "./User";
import UserClass from "./UserClass";
import React from "react";

const About = () => {

    return (
        <div>
          <h1>About Us</h1>
          <h2>This Is Namaste React Series</h2>

          <UserClass Name={"Preetham (Class)"} Location={"Hyderabad"}/>
        </div>
    )
}

export default About;