import classNames from "classnames";

const Grid = ({
	board,
	handleInput,
	puzzle,
	selected,
	setSelected,
	greenCount,
}) => {
	return (
		<div className="container">
			<table className="table">
				<tbody>
					{board.map((row, rIndex) => {
						return (
							<tr key={rIndex}>
								{row.map((cell, cIndex) => {
									const isPrefilled =
										puzzle[rIndex][cIndex] !== null;

									const cellIndex = rIndex * 9 + cIndex;

									return (
										<td
											key={cIndex}
											className={classNames("cell", {
												"same-row":
													selected &&
													rIndex === selected[0],
												"same-col":
													selected &&
													cIndex === selected[1],
												"same-box":
													selected &&
													Math.floor(rIndex / 3) ===
														Math.floor(
															selected[0] / 3
														) &&
													Math.floor(cIndex / 3) ===
														Math.floor(
															selected[1] / 3
														),
												green: cellIndex < greenCount,
											})}
										>
											<input
												type="text"
												maxLength={1}
												value={
													cell === null ? "" : cell
												}
												readOnly={isPrefilled}
												onFocus={() => {
													setSelected([
														rIndex,
														cIndex,
													]);
												}}
												onClick={() => {
													setSelected([
														rIndex,
														cIndex,
													]);
												}}
												onChange={(e) => {
													handleInput(
														rIndex,
														cIndex,
														e.target.value
													);
												}}
											/>
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Grid;
