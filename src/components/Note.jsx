import React from "react";
// import { connect } from "react-redux";
// import { deleteNote } from "../redux/actions";
// import "./Note.css";

function Note(props) {
	function handleClick() {
		props.onDelete(props.id);
	}
	return (
		<div className="note">
			<h1> {props.title}</h1>
			<p>{props.content}</p>
			<button onClick={handleClick}>DELETE</button>
		</div>
	);
}

export default Note;
