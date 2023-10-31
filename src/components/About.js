import React,{useState} from 'react'

export default function About(props) {

    const[myStyle, setMyStyle] = useState( {
        color:'black',
        backgroundColor:'white',
    })

    const[btnText,setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
      if(myStyle.color ==='black'){
        setMyStyle({
            color: 'white',
            backgroundColor: 'black',
            // border:'1px solid white'

        })
        setBtnText("Enable Light Mode")

      }
      else{
        setMyStyle({
           color:'black',
           backgroundColor: 'white',
        //    border:'1px solid black'

    })
        setBtnText("Enable Dark Mode")

      }
    }
  return (
    <div className="container" style={myStyle}>
        <h1>About us</h1>
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOnse" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>this is first item</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quidem sunt. Dolor similique quaerat asperiores porro, sapiente voluptate esse eius. Odio sint numquam perspiciatis voluptates optio minima fugit sapiente quaerat.
                </div>
            </div>
      </div>
      <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>this is first item</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quidem sunt. Dolor similique quaerat asperiores porro, sapiente voluptate esse eius. Odio sint numquam perspiciatis voluptates optio minima fugit sapiente quaerat.
                </div>
            </div>
      </div>
      <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btnText}</button>
    </div>
  )
}
