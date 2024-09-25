import React from "react";
import Jumbotron from "./jumbotron";
import Card from "./Card"
import { Navbar } from "./nav";
import { Footer } from "./footer";

import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
	    	<Navbar />
			<Jumbotron title={"Welcome to React!"} btnText={"Call to action!"}/>
			<div className="d-flex overflow-auto w-75 mx-auto">
				<Card img={rigoImage} />
				<Card img={rigoImage} />
				<Card img={rigoImage} />
				<Card img={rigoImage} />
				<Card img={rigoImage} />
				<Card img={rigoImage} />
				<Card img={rigoImage} />

			</div>
		  <Footer />
		</div>
	);
};
export default Home