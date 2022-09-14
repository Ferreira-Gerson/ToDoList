import React, { useState } from "react";

//create your first component
const Home = () => {
	const [ task , setTask ] = useState();
	const [ listtask, setListTask ] = useState ([]);
	
	const catchValue = (evnt) => {
		if (evnt.keyCode === 13) {
			setListTask([...listtask, evnt.target.value]);
			evnt.target.value = "";
		
		}
	};
	console.log(listtask);
	
	const deleteItem = (index) => () =>{
		setListTask((item) => item.filter((_, item) => item !== index));	
	}
	console.log(deleteItem)
	const list = listtask.map((item, index) => {
		return (
			<li key={index} onClick={deleteItem(index)}>{item}</li>
		)
	});

	return (
		<div className="container text-center">
			<h1 className="text-center mt-5">TODOS</h1>
  				<input className="text" onKeyDown={catchValue} placeholder="Please add your task" />
			<ul className="list-group aline-center">
				<li>{list}</li>
			</ul>
		</div>
	);
};

export default Home;
