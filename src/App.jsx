import { useEffect, useState } from "react";
import "./App.css";

import Grid from "./components/Grid";
import Controls from "./components/Controls";
import { fetchPuzzle } from "./fetch-puzzle";

function App() {
	const [board, setBoard] = useState(null);
	const [puzzle, setPuzzle] = useState(null);
	const [solution, setSolution] = useState(null);
	const [status, setStatus] = useState(null);
	const [error, setError] = useState("");

	useEffect(() => {
		fetchPuzzle({
			setError,
			setStatus,
			setPuzzle,
			setSolution,
			setBoard,
			setSelected,
		});
	}, []);

	const [selected, setSelected] = useState(null);
	const [greenCount, setGreenCount] = useState(0);

	const handleCheck = () => {
		const flatBoard = board.flat();
		const flatSolution = solution.flat();

		if (flatBoard.every((cell, i) => cell === flatSolution[i])) {
			setStatus("Correct");

			let count = 0;
			let totalCells = 81;
			const interval = setInterval(() => {
				count++;
				setGreenCount(count);
				if (count === totalCells) clearInterval(interval);
			}, 30);
		} else {
			setStatus("Incorrect , try Again !");
			setGreenCount(0);
		}
	};

	const handleReset = () => {
		setBoard(puzzle.map((row) => [...row]));
		setStatus("");
		setSelected(null);
		setGreenCount(0);
	};

	const handleNewPuzzle = () => {
		setGreenCount(0);
		fetchPuzzle({
			setError,
			setStatus,
			setPuzzle,
			setSolution,
			setBoard,
			setSelected,
		});
	};

	const handleInput = (rIndex, cIndex, value) => {
		if (value === "" || (value >= 1 && value <= 9)) {
			setBoard((prev) =>
				prev.map((row, r) =>
					row.map((cell, c) => {
						if (r === rIndex && c === cIndex) {
							return value ? parseInt(value) : null;
						}

						return cell;
					})
				)
			);
		}
	};

	if (error) {
		return <div>Failed To Fetch Puzzle</div>;
	}

	if (!board) {
		return <div>Loading...</div>;
	}

	return (
		<div
			className="sudoku"
			style={{
				textAlign: "center",
			}}
		>
			<h1>Sudoku</h1>

			<Grid
				board={board}
				handleInput={handleInput}
				puzzle={puzzle}
				selected={selected}
				setSelected={setSelected}
				greenCount={greenCount}
			/>

			<Controls
				handleCheck={handleCheck}
				handleReset={handleReset}
				handleNewPuzzle={handleNewPuzzle}
			/>

			{status && (
				<div
					className="status"
					style={{
						backgroundColor:
							status === "Incorrect , try Again !"
								? "hsla(0, 42%, 14%, 1.00)"
								: "hsla(112, 42%, 14%, 1.00)",
						color:
							status === "Incorrect , try Again !"
								? "hsl(0, 83%, 36%)"
								: "hsl(112, 83%, 36%)",
						border:
							status === "Incorrect , try Again !"
								? "1.5px solid hsl(0, 60%, 22%)"
								: "1.5px solid hsl(112, 60%, 22%)",
					}}
				>
					{status}
				</div>
			)}
		</div>
	);
}

export default App;
