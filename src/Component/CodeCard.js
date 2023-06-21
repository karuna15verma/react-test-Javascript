import React from "react";
import "../Style/codeCard.css";

function DetailCard(props) {
	return (
		<div className="details-card">
			<span style={{ fontSize: "30px" }}>CODE:</span>
			<input
				className="detail-input-text"
				type="text"
				id="code"
				name="code"
				value={props.code}
				onChange={(event) => props.handleChangeText(event)}
			></input>
			<div className="detail-button-div">
				<button onClick={() => props.submitCode()} className="detail-button">
					Done
				</button>
			</div>
		</div>
	);
}

export default DetailCard;
