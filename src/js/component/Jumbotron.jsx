import React from "react";

// This ({title, btnText}) is a way to define props I learn with youtube
const Jumbotron = ({title, btnText})  => {
    return ( 
        <div className="jumbotron bg-light pb-3 d-flex flex-column align-items-start">
  <h1 className="display-4 ms-4 fw-semibold">{title}</h1>
  <p className="lead ms-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad possimus illo quae, odit voluptatibus tempora fugiat hic fugit voluptas, consequatur, ratione odio quam unde doloremque! Nam aliquid totam maiores asperiores?</p>
  
  <p className="lead">
    <a className="btn btn-primary btn-lg  ms-4" href="#" role="button">{btnText}</a>
  </p>
</div>
     );
}
 
export default Jumbotron;