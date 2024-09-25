import React from "react";
import Cards from "./Cards"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Cards img={rigoImage} />
		</div>
		
	);
};

export default Home;
