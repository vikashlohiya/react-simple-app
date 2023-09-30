 import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {ThemeContext} from "./index"
import {t} from "./index"
import React,{useContext,useState ,setState} from 'react'
import Header from './Header';
export const myContext = React.createContext('light');

function App(props) {
  const [count, setS] = useState({name:"vikash","roll":12});
   function setS1()
   {
    console.log(count.name);
 //  const count1={name:"vikash lohiya","roll":12};
 count.name="vikash lohiya";
     setS(count);
    console.log(count.name);
      }
  const colorValue= useContext(ThemeContext)
  return (
    <div>
      
      <myContext.Provider value={count.name}>
      <input type="button" value="Click" onClick={setS1} />
     <Header />
     
     </myContext.Provider>
      </div>
  );
}

export default App;
