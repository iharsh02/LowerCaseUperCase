import React,{useState} from "react";
import PropTypes from "prop-types";

export default function Textform(props) {


  // to change the entered word to uppercase 
  const handelUpclick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  
  }

  const handelLowclick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  
  }

  
  // const handleFindReplace = () => {
  //   // Implement the find and replace logic here
  //   // You can use JavaScript's String methods, such as replace(), to find and replace text within the 'text' state

  //   // Example: Replaces all occurrences of 'oldText' with 'newText'
  //   const replacedText = text.replace(/oldText/g, 'newText');

  //   // Update the 'text' state with the replaced text
  //   setText(replacedText);
  // };

  const handelOnchange = (event) =>{
    // console.log("On Change");
    setText(event.target.value);

  }
  

// use state hook
  const [ text , setText] = useState('Enter text here'); 
  
  return (
    <>
      <div className="container">
      <h1>{props.txt}
      </h1>
      {/* <h2> */}
      <textarea name="postContent" rows={5} cols={48} value = {text} onChange={handelOnchange}/>
      {/* </h2> */}
      </div>

      <div className="container">
      <button className="btn btn-outline-primary mx-1 mb-2" onClick={handelUpclick}>{props.btn}</button>
      <button className="btn btn-outline-primary mx-1 mb-2" onClick={handelLowclick}>{props.btn2}</button>
      </div>
      {/* <button className="btn btn-outline-primary mx-1 mb-2" onClick={handleFindReplace}>{props.btn3}</button> */}

      <div className="container">
        <h1>Your text summery</h1>
        <p>{text.split(" ").length}Words and {text.length} Characters</p>
        <p>{text.split(" ").length * 0.008} minutes to read this paragraph</p>
        <h2>Preview</h2>
        <p>{text}</p>

      </div>
     
    </>


  );
}

Textform.propTypes ={
  txt : PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired
};

Textform.defaultProps ={
  txt : 'Enter your txt here',
  btn : 'This is your button'
}