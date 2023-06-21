import React from "react";
import "../Style/formCard.css";

function FormCard(props) {
	var formValue = props.formValue;

	return (
		<div className="form-card">
			<div className="form-border">
				<span className="form-title">{formValue.title}</span>
				<div className="input-div">
					{formValue.data.length !== 0 ? (
						formValue.data.map((data, index) => {
							return (
								<div>
									<input
										type="radio"
										id={index}
										name={formValue.title}
										value={`${data.name + index}`}
										onChange={(e) =>
											props.onValueChange(e, data.name, formValue.title)
										}
									/>
									<label for="javascript">{data.name}</label>
								</div>
							);
						})
					) : (
						<p>No Data Found</p>
					)}
				</div>
				<div className="next-button-div">
					<button
						className="next-button"
						onClick={() => props.makeNextButton(formValue.title)}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}

export default FormCard;
