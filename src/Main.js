import React,{useState} from 'react'


import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar  from "./components/Navbar";
import Alert  from "./components/Alert";
import Uppercase  from "./components/Uppercase";
import reportWebVitals from './reportWebVitals';
import About  from "./pages/About";


function Main(props) {
  const [colorClass, setColorClass] = useState('light'); 
  const [alert, setMessase] = useState(null); 
  const changeTheme=()=>{
   
      if(colorClass==='light'){
        setColorClass('dark');
        showAlert('Dark mode enabled.')
      }else{
        setColorClass('light');
        showAlert('Light mode enabled.')
      }
  }

  const showAlert=(msg)=>{
    setMessase(msg);
    setTimeout(()=>{
        setMessase(null)
    }
    ,2000);
  }
  return (
    <>
    <Router>
    <Navbar classColor={colorClass} changeTheme={changeTheme}  />
    <Alert msg={alert}/>
      <Switch>       
        <Route exact path="/about" >
          <About />
        </Route>
        <Route exact path="/" >
        <Uppercase showAlert={showAlert}   />
        </Route>
        
      </Switch>
    </Router>
    
     {/* <Uppercase showAlert={showAlert}/> */}
   </>
  );
}

export default Main;