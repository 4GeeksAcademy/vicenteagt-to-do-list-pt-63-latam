import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ToDoList } from "./ToDoList.jsx";
import { DesignToDo } from "./DesignToDo.jsx";
//create your first component
const Home = () => {
	return (
		    <div className="container-fluid">
				<div className="row mt-2">
					<div className="col-2 m-auto ">
						<h1 className="todosTittleStyle">todos</h1>
					</div>

				</div>
<ToDoList/>
		 </div>
	);
};

export default Home;