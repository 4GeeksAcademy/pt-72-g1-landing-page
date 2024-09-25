import React from "react";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards"

import { Navbar } from "./nav";
import { Footer } from "./footer";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
	    <Navbar />
			<Jumbotron title={"Welcome to React!"} btnText={"Call to action!"}/>
			<Cards img={rigoImage} />
		  <Footer />
		<div>
	);
};
