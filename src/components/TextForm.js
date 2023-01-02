import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {

    const handleUpClick =()=>{
       let newvar = text.toUpperCase();
       setText(newvar);
       props.generatealert("Converted to Upper Case")
    } 
    const handleDownClick =()=>{
       let newvar = text.toLowerCase();
       setText(newvar);
       props.generatealert("Converted to Lower Case")

    } 
    const handleClear =()=>{
       setText("");
       props.generatealert("Text Cleared")

    } 
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.generatealert("Speaking")

    }
    const handleCopy=()=>{
      let textr = document.getElementById("myBox")
      textr.select();
      navigator.clipboard.writeText(textr.value);
      props.generatealert("Text Copied")

    }
    const handleExtraSpaces=()=>{
      let newvar = text.split(/[ ]+/)
      setText(newvar.join(" "))
      props.generatealert("Extra spaces have been cleared")

    }
    
    const handleOnChange =(event)=>{
        setText(event.target.value);
    } 
    
    const [text, setText] = useState('');
    // text="edited text";      this is wrong
    // setText("edited text"); this is correct

    let design ={
      color: 'white',
      backgroundColor: 'black'
    }


  return (
    <>
      <div className="container">
             <h1 style={props.design} >{props.heading}</h1>
             <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={props.design}></textarea>
             </div>
             <button className="btn btn-primary my-2" onClick={handleUpClick} >Convert to UpperCase</button>
             <button className="btn btn-primary mx-3 my-2" onClick={handleDownClick} >Convert to LowerCase</button>
             <button className="btn btn-primary my-2 " onClick={handleClear} >Clear Text</button>
             <button className="btn btn-primary mx-3 my-2 " onClick={handleCopy} >Copy Text</button>
             <button className="btn btn-primary my-2  " onClick={handleExtraSpaces} >Remove Extra Spaces</button>
             <button type="submit" onClick={speak} className="btn btn-primary mx-3 my-2">Speak</button>
      </div>

      <div className="container my-3">
            <h1 style={props.design} >Your Text Summary</h1>

            {/* text.split(" ").length is for words */}
            {/* text.length is for characters */}
            {/* this app is like word counter */}
            {/* in 1 minute 125 words can be read, so 1 word is read in 1/125=0.008 min.  */}
            {/* 0.008 * no. of words = read time of paragraph */}
            {/* words - 1 = spaces, characters-spaces = characters without spaces */}


            <p style={props.design} >{text.split(" ").length} words, {text.length} characters</p>
            <p style={props.design} >{text.length-(text.split(" ").length - 1)} characters without spaces</p>

            {/* below it it will show seconds below 60 after that it will show in minutes */}
            <p style={props.design} >{text.split(" ").length * 0.008 * 60>60?text.split(" ").length * 0.008: text.split(" ").length * 0.008 * 60} {text.split(" ").length * 0.008 * 60>60?"minutes":"seconds"} is reading time of above paragraph</p>
            <h2 style={props.design} >Preview</h2>
            <p style={props.design} >{text.length>0?text:"Enter text in the above textbox to preview "}</p>

           
      </div>

          

    </>     
  )
}
