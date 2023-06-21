import React, { useState } from "react";
import FormCard from "./FormCard";
import CodeCard from "./CodeCard";

const formMakeData = [
	{
		title: "make",
		data: [
			{
				name: "audi",
				value: false,
			},
			{
				name: "bmw",
				value: false,
			},
			{
				name: "vauxhal",
				value: false,
			},
			{
				name: "mercedes",
				value: false,
			},
			{
				name: "peugeot",
				value: false,
			},
			{
				name: "renault",
				value: false,
			},
		],
	},
];

const formColourValue = [
	{
		title: "colour",
		data: [
			{
				name: "blue",
				value: false,
			},
			{
				name: "red",
				value: false,
			},
			{
				name: "black",
				value: false,
			},
			{
				name: "orange",
				false: false,
			},
		],
	},
];
function Form() {
	const [code, setCode] = useState("");
	const [selectedMakeValue, setMakeSelectedValue] = useState("");
	const [selectedColourValue, setColourSelectedValue] = useState("");
	const [saveCode, setSaveCode] = useState(false);
	const makeNextButton = (title, value) => {
		if (title === "make" && selectedMakeValue !== "")
			alert(`You have selected ${selectedMakeValue}`);
		else if (title === "colour" && selectedColourValue !== "")
			alert(`colour is ${selectedColourValue}`);
		else alert(`Please select a value`);
	};

	const handleChangeText = (e) => {
		setCode(e.target.value);
	};

	const onValueChange = (event, data, formTitle) => {
		if (formTitle === "make") setMakeSelectedValue(data);
		else setColourSelectedValue(data);
	};

	const submitCode = () => {
		setSaveCode(true);
	};

	return (
		<div>
			{formMakeData?.map((formValue) => {
				return (
					<FormCard
						makeNextButton={makeNextButton}
						formValue={formValue}
						formMakeData={formMakeData}
						onValueChange={onValueChange}
						selectedMakeValue={selectedMakeValue}
						selectedColourValue={selectedColourValue}
					/>
				);
			})}
			{formColourValue?.map((formValue) => {
				return (
					<FormCard
						makeNextButton={makeNextButton}
						formValue={formValue}
						formMakeData={formMakeData}
						onValueChange={onValueChange}
						selectedColourValue={selectedColourValue}
					/>
				);
			})}
			<CodeCard
				handleChangeText={handleChangeText}
				code={code}
				submitCode={submitCode}
			/>
			<div>
				<div style={styles.detailStyle}>
					<span>Generated Text</span>
					<span>
						I have a {selectedMakeValue} and the colour is {selectedColourValue}
						.
					</span>
					{selectedColourValue === "red" && <span>THE CAR IS RED! NICE!!</span>}
					<span>REF: {saveCode === true ? code : "No coupen code apply"}</span>
				</div>
			</div>
		</div>
	);
}

const styles = {
	detailStyle: {
		display: "flex",
		border: "1px solid black",
		flexDirection: "column",
		width: "85%",
		padding: "20px",
		margin: "5%",
	},
};

export default Form;
