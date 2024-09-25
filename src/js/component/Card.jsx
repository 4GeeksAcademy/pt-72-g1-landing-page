import React from "react";


export default function Card(props) {
    
    return (
        <div className = "d-flex flex-row justify-content-center align-items-end pt-3 mx-auto">

        
        <div className="card" style={{"width": "18rem"}}>
                <img src={props.img} className="card-img-top" alt="..."></img>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary d-flex justify-content-center">Find out Now!</a>
            </div>
        </div>  
      </div>
     
    )
}

