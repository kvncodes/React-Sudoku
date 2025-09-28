const Controls = ({ handleCheck, handleReset, handleNewPuzzle }) => {
	return (
		<div style={{ marginBlock: "2rem" }}>
			<button
				className="button"
				onClick={handleCheck}
				style={{ marginRight: "1rem" }}
			>
				Check
			</button>
			<button
				className="button"
				onClick={handleReset}
				style={{ marginRight: "1rem" }}
			>
				Reset
			</button>
			<button
				className="button"
				onClick={handleNewPuzzle}
				style={{ marginRight: "1rem" }}
			>
				New Puzzle
			</button>
		</div>
	);
};

export default Controls;
