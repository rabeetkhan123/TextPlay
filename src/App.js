import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  // ALL HOOKS AND STATE VARIABLE MADE FOR ALERT HERE, BECAUSE WE WANT WHOLE BODY COLOR TO BE DARK WITH NAVBAR

  const [showalert,setshowalert] = useState(null);

  // ALL HOOKS AND STATE VARIABLE MADE FOR TEXTFORM HERE, BECAUSE WE WANT WHOLE BODY COLOR TO BE DARK WITH NAVBAR

  const [design, setDesign] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  
  // ALL HOOKS AND STATE VARIABLE MADE FOR NAVBAR HERE, BECAUSE WE WANT WHOLE BODY COLOR TO BE DARK WITH NAVBAR
  const [mode, setMode] = useState("light");
  const [toggleModeText, settoggleModeText] = useState("Enable Dark Mode");
  const [myStyle, setMyStyle] = useState({
    color: 'black'
  });
  
// function for generating an alert

const generatealert=(message)=>{
setshowalert(message)
 
// settimeout is to null the alert after 2 sec, so another alert can be fired

setTimeout(() => {
  setshowalert(null);
}, 2000);
}

// function for toggling dark and light mode

  const toggleMode=()=>{

    // for navbar
    if(mode=='light'){
      setMode('dark')
      settoggleModeText('Disable Dark mode')
      setMyStyle({
        color: 'white'
      })
      document.body.style.backgroundColor = 'black'
      // for navbar
      
      // for textform
      setDesign({
        color: 'white',
        backgroundColor: 'black'
      })
      // for textform
      document.title = 'TextPlay - Dark Mode Enabled'

      // to gain attention
      // setInterval(() => {
      //   document.title = 'install textplay now'   

      // }, 2000);
      
    }
    if(mode=='dark'){

      // for navbar
      setMode('light')
      settoggleModeText('Enable Dark mode')
      setMyStyle({
        color: 'black'
      })
      document.body.style.backgroundColor = 'white'
      // for navbar
      
      // for textform
      setDesign({
        color: 'black',
        backgroundColor: 'white'
      })
      // for textform
      document.title = 'TextPlay - Home'
      
    }
  }
  



  return (
    <>
   

    {/* <Navbar title='TextPlay' firstitem='Home' seconditem='About' mode={mode} toggleModeText={toggleModeText} toggleMode={toggleMode} myStyle={myStyle} generatealert={generatealert} />

    <Alert showalert={showalert}/>
    
     <div className='container my-2'>
       <TextForm heading='Enter text to play with' design={design}  generatealert={generatealert}/>
     </div>

           <About/> */}
{/* <BrowserRouter> */}

    <Navbar title='TextPlay' firstitem='Home' seconditem='About' mode={mode} toggleModeText={toggleModeText} toggleMode={toggleMode} myStyle={myStyle} generatealert={generatealert} />
        <Alert showalert={showalert}/>
    {/* <Routes> */}
         {/* <Route exact path='/' element={<TextForm heading='Enter text to play with' design={design}  generatealert={generatealert}/>}/> */}
         {/* <Route exact path='/about' element={<About/>}/> */}
    {/* </Routes> */}

{/* // </BrowserRouter> */}
       <TextForm heading='Enter text to play with' design={design}  generatealert={generatealert}/>
   
    </>
  );
}



export default App;
