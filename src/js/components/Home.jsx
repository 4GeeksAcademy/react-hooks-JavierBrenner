import React, { useEffect, useState } from "react";




//create your first component
const Home = () => {

	const [activeColor, setActiveColor] = useState("");
	const [visible, setVisible] = useState(false);

	const changeColor = () => {

		if (activeColor === "red") {
			setActiveColor("yellow");
		} else if (activeColor === "yellow") {
			setActiveColor("green");
		} else if (activeColor === "green") {
			if (visible) {
				setActiveColor("purple");
			} else {
				setActiveColor("red");
			}
		} else if (activeColor === "purple") {
			setActiveColor("red");
		} else {
			setActiveColor("red");
		}
	};

	const getShineClass = (color) => {
		if (activeColor === color) {
			return "shine";
		} else {
			return "";
		}
	};

	//-------------- crear el div purple, 
	// que cambie el estado de false a true para mostrar el div. --

	return (
		<>
			<div className="text-center mt-5">
				<div style={{ background: "black", width: "100px", padding: "10px", margin: "0 auto", borderRadius: "10px" }}>
					<div
						onClick={() => setActiveColor("red")}
						className={`red light ${getShineClass("red")}`}
					></div>
					<div
						onClick={() => setActiveColor("yellow")}
						className={`yellow light ${getShineClass("yellow")}`}
					></div>
					<div
						onClick={() => setActiveColor("green")}
						className={`green light ${getShineClass("green")}`}
					></div>
					{visible && (<div
						onClick={() => setActiveColor("purple")}
						className={`purple light ${getShineClass("purple")}`}
					></div>)}

				</div>
				<div style={{ background: "black", width: "10px", height: "300px", margin: "0 auto" }}></div>
				<button onClick={() => setVisible(!visible)}>
					{visible ? "Quitar Púrpura" : "Añadir Púrpura"}
				</button>
				<button className="btn btn-primary m-2" onClick={changeColor}>
					Next color
				</button>
			</div>
		</>
	);
};

export default Home;