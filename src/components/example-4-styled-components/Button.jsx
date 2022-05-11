//styled components
//> npm install styled-components

//import it
import styled from "styled-components"

// declare a variable to whatever you need
//this .button is what you got down there in the return
const MyNewStyledButton = styled.button`
        background-color: #81a;
        border-radius: 8px;
        color: white;
        font-size: 14pt;
        width: 300px;
`
//this string is "tagged template literals" "template string" "string interpolation" etc
//you can use regular css


export default function Button({ text }) {
  return (
    <MyNewStyledButton>{text}</MyNewStyledButton>
  );
}

  // pros
  //standard css syntax
  //no extra files
  //easy to control via props or state
  //styles are shared across like components
  //unified css/component

  // cons
  //weird backticks
  //
