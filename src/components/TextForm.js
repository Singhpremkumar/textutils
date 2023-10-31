import React, { useState } from 'react'

export default function TextForm(props) {
    const { showAlert, Mode, mode } = props


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        showAlert("Converted to Lowercase", "success");
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        showAlert("Copy to clipboard", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleDelete = () => {
        setText(" ")
        showAlert("Text Deleted", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: Mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: Mode === 'dark' ? 'grey' : 'white' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-danger mx-2" onClick={handleDelete}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

            </div>
            <div className="container my-3" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
