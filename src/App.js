import { Routes, Route } from "react-router-dom";
import Crew from "./Pages/Crew";
import Destinations from "./Pages/Destinations";
import Home from "./Pages/Home";
import Technology from "./Pages/Technology";



function App() {
	return (

			<Routes>
    			<Route path="/" element={<Home />} />
        		<Route path="/destination" element={<Destinations />} />
        		<Route path="/crew" element={<Crew />} />
        		<Route path="/technology" element={<Technology />} />
			</Routes>


	);
}

export default App;
