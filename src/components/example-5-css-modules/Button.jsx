//css modules

//import this module.css file you create
import styles from  "./button.module.css"

export default function Button({ text }) {
    return (
      <button className={styles.btn5}>{ text }</button>
    );
  }

// Pros
// This scopes our css to this component file only
// css file can be reused for multiple components but will not affect 
//similar classes in other component css files

// Cons
// can be weird with typescript
// syntax to do multiple class names can be weird - must use template literals