//css in js!

//this is what MS Teams use to build their app
//they built a component library for themselves, 
//they use css in js to style the components in the app

//to start using this this we run 
//> npm install react-jss

//then import
import { createUseStyles } from "react-jss"

//use their method to add a bunch of style objects
//to one variable youre going to pass in
//PROTIP: create this *outside* the function or 
//you will have re-render problems on manual refresh
const styles = createUseStyles({
  btn: {
    backgroundColor: "#da2",
    borderRadius: "8px",
    color: "white",
    fontSize: "14pt",
    width: "300px",
  },
  btnColor: {
    backgroundColor: "brown"
  }
})


export default function Button({ text }) {

//"styles" is a function
//you have to declare a variable that runs styles() to expand them
const classes = styles()

    return (
      <button className={ classes.btn }>{ text }</button>
    );
  }

  // pro
  //this is popular, dev team friendly because  of file structure?
  //quick server side rendering
  //scalable
  //reduced file size, only necessary declarations

  // con
  //unreadable classnames assigned under the hood
  //it is a library you become dependent on. what if something happens?