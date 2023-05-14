import React from "react";
// import { connect } from "react-redux";
// import { deleteNote } from "../redux/actions";
// import "./Note.css";

function Note(props) {
	return (
		<div className="note">
			<h1 className="note__title"> {props.note_title}</h1>
			<p className="note__content">{props.note_content}</p>
			{/* <div className="note__date">Note date</div>
			<div className="note__delete">Delete</div> */}
		</div>
	);
}

export default Note;
