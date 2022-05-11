//inline css styling in jsx

export default function Button({ text }) {

  //here we are
  const buttonStyle = {
    //define styles as key:value pairs
    //cant use kebob case, use camelCase
    //wrap the values in string quotes
    backgroundColor: "#d45",
    borderRadius: "8px",
    color: "white",
    fontSize: "24pt",
    padding: "15px 50px",
    width: "300px",
  }

    return (
      <button style={buttonStyle}>{ text }</button>
    );
  }

  // pros
  //no extra file
  //no class clashing
  //you can use this with props/state and you can alter styles on the fly
  //good for server side rendering

  
  // cons
  //clutter?
  //no real pseudoselectors, you have to use state instead