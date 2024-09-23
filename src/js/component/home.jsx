import React from "react";
import Jumbotron from "./Jumbotron";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			

			<Jumbotron title={"Welcome to React!"} btnText={"Call to action!"}/>
		</div>
	);
};

export default Home;
