import React from "react";

import Cards from "./Cards"

import { Navbar } from "./nav";
import { Footer } from "./footer";


//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>

			<Cards img={rigoImage} />

		<Navbar />
		<Footer />

		</div>
		
	);
};

export default Home;
