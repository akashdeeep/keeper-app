import React from "react";
// import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
	return (
		<div className="app">
			<Header />
			<main className="main">
				{notes.map((noteItem) => (
					<Note
						key={noteItem.key}
						note_title={noteItem.title}
						note_content={noteItem.content}
					/>
				))}
			</main>
			<Footer />
		</div>
	);
}

export default App;
