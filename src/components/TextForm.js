import React, {useState , useEffect} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase is clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showalert("Converted to uppercase","success")
    }
    const handleLoClick = () =>{
        console.log("Lowercase is clicked")
        let newText = text.toLowerCase()
        setText(newText)
        props.showalert("Converted to Lower case","success")
    }
    const handletoClear=()=>{
        setText("")
        props.showalert("Cleared","success")
    }

    const handleOnchange=(event)=>{         /*Whenever you are listening smthing for any event(onChange) in react ,you will get an event*/              
        console.log("Uppercase is clicked")
        setText(event.target.value)  /*lets say you have text already in it using state variable,you can add text you typeed there to variable text*/
        
    }
    const[text,setText] = useState('Enter text here')   /*Whenever you update value of text,you can do this by setText function*/
    /*text = 'eri' not allowed*/
    // setText("newText");  correct way
    const[myStyle,setNewstyle] = useState({
        fontFamily:"Times New Roman",
         
       
    } )

    const[btncolor,btnstyle] = useState({
        backgroundColor:'rgba(33,37,41,1)',
        color:'white'
        
    })
    useEffect(() => {
        btnstyle((prevStyle) => ({
            ...prevStyle,                                                      //refer to insights
            backgroundColor: props.mode === 'light' ? '#f8f9fa' :'rgba(33,37,41,1)',
            color:props.mode==="dark"?'#f8f9fa':'rgba(33,37,41,1)'
        }));
    }, [props.mode]);

    useEffect(() => {
        setNewstyle((prevStyle) => ({
            ...prevStyle,                                                      //refer to insights
            backgroundColor: props.mode === 'light' ? 'white' : '#4a4848',
            color:props.mode==="dark"?'white':'black'
        }));
    }, [props.mode]);
    const handleFontChange = (font) => {
        setNewstyle({ fontFamily: font });
        props.showalert("Changed font to "+font,"success")
    };
    
    const countParagraph = (text) => {
        // Split the text by newline and filter out empty strings
        const paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '');
        return paragraphs.length;
    }
    

//   -----------This is extra code-------------
 

const handleCopy=()=>{
    var text = document.getElementById('myBox');
    text.select()
    navigator.clipboard.writeText(text.value);  //clipboard API
    props.showalert("Copied to Clipboard","success")
}

const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showalert("Removed Xtra Spaces","success")
}
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
<div className="mb-3">
<textarea className="form-control" id="myBox" style={btncolor} value={text}  onChange={handleOnchange} rows="8"></textarea>
</div>
 <button className="btn-dark btn mx-2" style={btncolor} onClick={handleUpClick}> Convert to UpperCase</button>
 <button className="btn-dark btn mx-2" style={btncolor} onClick={handleLoClick}> Convert to LowerCase</button>
 <button className="btn-dark btn mx-2" style={btncolor} onClick={handletoClear}> Clear</button>
 <button className="btn-dark btn mx-2" style={btncolor} onClick={handleCopy}> Copy Text</button>
 <button className="btn-dark btn mx-2" style={btncolor} onClick={handleExtraSpaces}>Remove spaces</button>
 <div className="dropdown d-inline">
  <button className="btn btn-dark dropdown-toggle" style={btncolor} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="/" onClick={(e) => {
                                    e.preventDefault();
                                    handleFontChange("sans-serif");
                                }}>Sans-serif</a></li>
    <li><a className="dropdown-item" href="/" onClick={(e) =>{
                                             e.preventDefault();
                                             handleFontChange("Lucida Console")
    }} >Lucida</a></li>
    <li><a className="dropdown-item" href="/" onClick={(e) => {
                                    e.preventDefault();
                                    handleFontChange("monospace");
                                }}>Monospace</a></li>
  </ul>
</div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{(text.split(" ")).length} words and {text.length} characters</p>
        <p>No of paragraph : {countParagraph(text)}</p>
        <p>{0.008 * (text.split(" ")).length} Minutes read</p>
        <h2>Preview</h2>
        <p style={myStyle}>{text}</p></div>
        </>
  )
}
