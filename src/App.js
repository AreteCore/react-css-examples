import logo from './logo.svg';
import './App.css';
import Button1 from "./components/example-1-normal-css/Button"
import Button2 from "./components/example-2-inline-css/Button"
// import Button3 from "./components/example-3-css-in-js/Button"
// import Button4 from "./components/example-4-styled-components/Button"
// import Button5 from "./components/example-5-css-modules/Button"
// import Button6 from "./components/example-6-sass/Button"

function App() {
  return (
    <div className="App">
      <Button1 text="Button #1"/>
      <Button2 text="Button #2"/>
      {/* <Button3 text="Button #3"/> */}
      {/* <Button4 text="Button #4"/> */}
      {/* <Button5 text="Button #5"/> */}
      {/* <Button6 text="Button #6"/> */}
    </div>
  );
}

export default App;
