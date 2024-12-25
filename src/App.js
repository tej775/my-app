import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";



function App() {
  const[mode,setMode] = useState('light')  // whether dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor="#4a4848"
    showAlert("Dark mode has bee set","success")
    document.title = "TextUtils-Dark mode";        //use to change title of webpage
    // setInterval(() => {
    //    document.title = "TextUtils-active mode"
    // }, 2000);                                          //to make switching of titles for every 0.5sec

    // setInterval(() => {
    //    document.title = "TextUtils-active-Dark mode"
    // }, 1500);
  }          
    else{
      setMode('light')
    document.body.style.backgroundColor = "#f8f9fa"
    showAlert("Light mode has bee set","success")
    document.title = "TextUtils-Light mode";
    }     
  }
  const [alert,setAlert] = useState(null);
  const  showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
   } )
   setTimeout(() => {
     setAlert(null)
   }, 1000);
  }

  return (
     <>

<Router>  
<Navbar title="TextUtils" about = "About TextUtils" mode={mode}  toggleMode={toggleMode}/> 
{/* <Navbar />  */ }
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About />} />
          {/* /users---->component1
          /users/home---->component2 */}
          <Route
            exact path="/"                                           
            element={                                                
              <TextForm
                heading="Enter the text to analyze below"
                showalert={showAlert}
                mode={mode}
              />
            }
          />
          {/* <Route path="/">
          <TextForm heading="Enter the text to anlyse below" showalert={showAlert}  mode={mode}/>
          </Route> */}
        </Routes>
{/* <About/> */}
</div>

</Router>  

       
     </>
  );
  
}

export default App;
