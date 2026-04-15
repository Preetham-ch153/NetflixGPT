import {useState,useEffect} from "react";

const User = (props) => {
    const { Name,Location } = props;
    const[count]=useState(0);
    const[count2]=useState(1);


    return(
        <div className="User-card">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>{Name}</h2>
            <h3>{Location}</h3>
            <h4>Contact:chinthoju@gmail.com</h4>
        </div>
    )
}

export default User;