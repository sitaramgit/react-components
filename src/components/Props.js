import { render } from "@testing-library/react";
import React from "react";

const Props = props => {
    console.log(props)
   return (
    <div>
        <p><b>Hello</b> {props.fname} {props.lname}</p>
        {props.children}
    </div>
   )
}

export default Props