// import style sheet, easiest way
import "./Button.css"

export default function Button({ text }) {
    return (
      <button className="btn">{ text }</button>
    );
  }

// pros of this link method
//contained to one file
//easy to find the file


// cons
//can conflict with other classes/duplicate classes and cause conflicts
//this is not a great way to do things
//too many files, bloats

