const Controls = ({ handleCheck, handleReset, handleNewPuzzle }) => {
	return (
		<div
			style={{
				marginBlock: "1.5rem",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<button className="button" onClick={handleCheck}>
				Check
			</button>
			<button className="button" onClick={handleReset}>
				Reset
			</button>
			<button className="button" onClick={handleNewPuzzle}>
				New Puzzle
			</button>
		</div>
	);
};

export default Controls;
