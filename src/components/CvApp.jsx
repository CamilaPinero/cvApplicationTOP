/* eslint-disable react/prop-types */
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form } from "./Form";
import CvPreview from "./CvPreview";

const newTheme = createTheme({
	palette: {
		primary: {
			main: "#e67474",
		},
	},
});

export default function CvApp() {
	const [fullName, setFullName] = useState("Full Name");
	const [email, setEmail] = useState("mail@mail.com");
	const [phone, setPhone] = useState("35462258");
	const [address, setAddress] = useState("Córdoba, Argentina");
	const [educationalExperienceArray, setEducationalExperienceArray] =
		useState([
			{
				id: crypto.randomUUID(),
				title: "Science",
				school: "University example",
				dateStart: "2016",
				dateEnd: "2020",
			},
		]);
	const [workExperienceArray, setWorkExperienceArray] = useState([
		{
			id: crypto.randomUUID(),
			company: "Company example",
			position: "Test Subject",
			dateStart: "2018",
			dateEnd: "2020",
			responsabilities:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
		},
	]);

	function handleFullName(e) {
		setFullName(e.target.value);
	}
	function handleEmail(e) {
		setEmail(e.target.value);
	}
	function handlePhone(e) {
		setPhone(e.target.value);
	}
	function handleAddress(e) {
		setAddress(e.target.value);
	}
	const addEducationalExperience = () => {
		setEducationalExperienceArray((prev) => [
			...prev,
			{
				id: crypto.randomUUID(),
				title: "",
				school: "",
				dateStart: "",
				dateEnd: "",
			},
		]);
	};
	const handleEducationalExperienceChange = (i, newValue, key) => {
		let newArr = educationalExperienceArray.map((study) =>
			educationalExperienceArray.findIndex((s) => s.id === study.id) === i
				? { ...study, [key]: newValue }
				: study
		);
		setEducationalExperienceArray(newArr);
	};
	const addWorkExperience = () => {
		setWorkExperienceArray((prev) => [
			...prev,
			{
				id: crypto.randomUUID(),
				company: "",
				position: "",
				dateStart: "",
				dateEnd: "",
				responsabilities: "",
			},
		]);
	};
	const handleWorkExperienceChange = (i, newValue, key) => {
		let newArr = workExperienceArray.map((work) =>
			workExperienceArray.findIndex((s) => s.id === work.id) === i
				? { ...work, [key]: newValue }
				: work
		);
		setWorkExperienceArray(newArr);
	};
	const handlePrint = () => {
		window.print();
	};

	return (
		<>
			<ThemeProvider theme={newTheme}>
				<div className="container">
					<div className="sidebar">
						<Form
							fullName={fullName}
							handleFullName={handleFullName}
							address={address}
							handleAddress={handleAddress}
							email={email}
							handleEmail={handleEmail}
							phone={phone}
							handlePhone={handlePhone}
							educationalExperienceArray={
								educationalExperienceArray
							}
							addEducationalExperience={addEducationalExperience}
							handleEducationalExperienceChange={
								handleEducationalExperienceChange
							}
							workExperienceArray={workExperienceArray}
							addWorkExperience={addWorkExperience}
							handleWorkExperienceChange={
								handleWorkExperienceChange
							}
							handlePrint={handlePrint}
						/>
					</div>
					<div className="preview">
						<div className="paper">
							<CvPreview
								fullName={fullName}
								email={email}
								phone={phone}
								address={address}
								educationalExperienceArray={
									educationalExperienceArray
								}
								workExperienceArray={workExperienceArray}
							/>
						</div>
					</div>
				</div>
			</ThemeProvider>
		</>
	);
}

//quedo andando todo teoricamente, agregar funcion descargar pdf
