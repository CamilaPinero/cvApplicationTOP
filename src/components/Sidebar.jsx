/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
	Typography,
	Input,
	InputLabel,
	FormHelperText,
	Toolbar,
	Divider,
	Button,
	IconButton,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

function CvPreview({
	fullName,
	email,
	phone,
	address,
	educationalExperienceArray,
	workExperienceArray,
}) {
	return (
		<div className="cv">
			<div className="name">
				<Typography variant="h3" gutterBottom>
					{fullName}
				</Typography>
			</div>
			<div className="personal-info">
				<Typography variant="h6" gutterBottom>
					{email}
				</Typography>
				<Typography variant="h6" gutterBottom>
					{phone}
				</Typography>
				<Typography variant="h6" gutterBottom>
					{address}
				</Typography>
			</div>
			<div className="study-info">
				<Typography variant="h4" gutterBottom>
					Educational experience
				</Typography>
				<ul>
					{educationalExperienceArray && (
						<>
							{educationalExperienceArray.map((ee) => (
								<li key={ee.id}>
									<div className="study-1">
										<Typography variant="h5">
											{ee.title}
										</Typography>
										<Typography variant="h6">
											{ee.school}
										</Typography>
										<Typography variant="h6" gutterBottom>
											{`${ee.dateStart} - ${ee.dateEnd}`}
										</Typography>
									</div>
								</li>
							))}
						</>
					)}
				</ul>
			</div>
			<div className="work-info">
				<Typography variant="h4" gutterBottom>
					Work experience
				</Typography>
				<ul>
					{workExperienceArray && (
						<>
							{workExperienceArray.map((work) => (
								<li key={work.SideBar}>
									<div className="work-1">
										<Typography variant="h5">
											{work.position}
										</Typography>
										<Typography variant="h6">
											{work.company}
										</Typography>
										<Typography variant="h6">
											{`${work.dateStart} - ${work.dateEnd}
											`}
										</Typography>
										<Typography
											variant="subtitle1"
											gutterBottom
										>
											{work.responsabilities}
										</Typography>
									</div>
								</li>
							))}
						</>
					)}
				</ul>
			</div>
		</div>
	);
}

export default function SideBar() {
	const [fullName, setFullName] = useState("Nombre Completo");
	const [email, setEmail] = useState("mail@mail.com");
	const [phone, setPhone] = useState("35462258");
	const [address, setAddress] = useState("Córdoba, Argentina");
	const [educationalExperienceArray, setEducationalExperienceArray] =
		useState([
			{
				id: crypto.randomUUID(),
				title: "aa",
				school: "bb",
				dateStart: "",
				dateEnd: "",
			},
		]);
	const [workExperienceArray, setWorkExperienceArray] = useState([
		{
			id: crypto.randomUUID(),
			company: "alguna",
			position: "bb",
			dateStart: "2010",
			dateEnd: "1023",
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
				company: "Veterinaria Avellaneda",
				position: "bb",
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

	const form = (
		<>
			<div>
				<Toolbar>
					<Typography
						variant="h4"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						CV APP
					</Typography>
				</Toolbar>
				<Divider />

				<div className="form">
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						General Information
					</Typography>
					<FormControl>
						<InputLabel htmlFor="name">Full name</InputLabel>
						<Input
							type="text"
							id="name"
							aria-describedby="helper-name"
							onChange={handleFullName}
							value={fullName}
						/>
						<FormHelperText id="helper-name">
							Enter your name
						</FormHelperText>
					</FormControl>
					<FormControl>
						<InputLabel htmlFor="email">Email address</InputLabel>
						<Input
							type="email"
							id="email"
							aria-describedby="helper-email"
							onChange={handleEmail}
							value={email}
						/>
						<FormHelperText id="helper-email">
							Enter your email
						</FormHelperText>
					</FormControl>
					<FormControl>
						<InputLabel htmlFor="phone">Phone number</InputLabel>
						<Input
							type="number"
							id="phone"
							aria-describedby="helper-phone"
							onChange={handlePhone}
							value={phone}
						/>
						<FormHelperText id="helper-phone">
							Enter your phone number
						</FormHelperText>
					</FormControl>
					<FormControl>
						<InputLabel htmlFor="address">Address</InputLabel>
						<Input
							type="address"
							id="address"
							aria-describedby="helper-address"
							onChange={handleAddress}
							value={address}
						/>
						<FormHelperText id="helper-address">
							Enter your address
						</FormHelperText>
					</FormControl>

					<div className="sectionHeader">
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}
						>
							Educational experience
						</Typography>
						<IconButton
							color="primary"
							aria-label="add to shopping cart"
							sx={{
								width: "40px",
								height: "40px",
							}}
							onClick={addEducationalExperience}
						>
							+
						</IconButton>
					</div>
					<ul className="studySection">
						{educationalExperienceArray.map((ee, i) => (
							<li key={ee.id}>
								<div className="sectionBody">
									<FormControl>
										<InputLabel htmlFor="school-name">
											School name
										</InputLabel>
										<Input
											type="text"
											id="school-name"
											aria-describedby="helper-school-name"
											value={ee.school}
											onChange={(e) =>
												handleEducationalExperienceChange(
													i,
													e.target.value,
													"school"
												)
											}
										/>
										<FormHelperText id="helper-school-name">
											Enter the school name
										</FormHelperText>
									</FormControl>
									<FormControl>
										<InputLabel htmlFor="title">
											Title of study
										</InputLabel>
										<Input
											type="text"
											id="title"
											aria-describedby="helper-title"
											value={ee.title}
											onChange={(e) =>
												handleEducationalExperienceChange(
													i,
													e.target.value,
													"title"
												)
											}
										/>
										<FormHelperText id="helper-title">
											Enter the title of your study
										</FormHelperText>
									</FormControl>
									<FormControl>
										<Input
											type="number"
											id="study-date-start"
											aria-describedby="helper-study-date-start"
											value={ee.dateStart}
											onChange={(e) =>
												handleEducationalExperienceChange(
													i,
													e.target.value,
													"dateStart"
												)
											}
										/>
										<FormHelperText id="helper-study-date-start">
											Enter the start date
										</FormHelperText>
									</FormControl>
									<FormControl>
										<Input
											type="number"
											id="study-date-end"
											aria-describedby="helper-study-date-end"
											value={ee.dateEnd}
											onChange={(e) => {
												handleEducationalExperienceChange(
													i,
													e.target.value,
													"dateEnd"
												);
											}}
										/>
										<FormHelperText id="helper-study-date-end">
											Enter the end date
										</FormHelperText>
									</FormControl>
								</div>
							</li>
						))}
					</ul>

					<div className="sectionHeader">
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}
						>
							Work experience
						</Typography>
						<IconButton
							color="primary"
							aria-label="add to shopping cart"
							sx={{
								width: "40px",
								height: "40px",
							}}
							onClick={addWorkExperience}
						>
							+
						</IconButton>
					</div>

					<ul className="workSection">
						{workExperienceArray.map((work, i) => (
							<li key={work.id}>
								<div className="sectionBody">
									<FormControl>
										<InputLabel htmlFor="company-name">
											Company name
										</InputLabel>
										<Input
											type="text"
											id="company-name"
											aria-describedby="helper-company-name"
											value={work.company}
											onChange={(e) =>
												handleWorkExperienceChange(
													i,
													e.target.value,
													"company"
												)
											}
										/>
										<FormHelperText id="helper-company-name">
											Enter the company name
										</FormHelperText>
									</FormControl>
									<FormControl>
										<InputLabel htmlFor="position">
											Position title
										</InputLabel>
										<Input
											type="text"
											id="position"
											aria-describedby="helper-position"
											value={work.position}
											onChange={(e) =>
												handleWorkExperienceChange(
													i,
													e.target.value,
													"position"
												)
											}
										/>
										<FormHelperText id="helper-position">
											Enter the title of your position
										</FormHelperText>
									</FormControl>
									<FormControl>
										<Input
											type="number"
											id="work-date-start"
											aria-describedby="helper-work-date-start"
											value={work.dateStart}
											onChange={(e) =>
												handleWorkExperienceChange(
													i,
													e.target.value,
													"dateStart"
												)
											}
										/>
										<FormHelperText id="helper-work-date-start">
											Enter the start date
										</FormHelperText>
									</FormControl>
									<FormControl>
										<Input
											type="number"
											id="work-date-end"
											aria-describedby="helper-work-date-end"
											value={work.dateEnd}
											onChange={(e) =>
												handleWorkExperienceChange(
													i,
													e.target.value,
													"dateEnd"
												)
											}
										/>
										<FormHelperText id="helper-work-date-end">
											Enter the end date
										</FormHelperText>
									</FormControl>
									<FormControl
										sx={{
											gridRow: "3",
											gridColumn: "1/-1",
										}}
									>
										<InputLabel htmlFor="responsabilities">
											Main responsabilities
										</InputLabel>
										<Input
											type="textfield"
											id="responsabilities"
											aria-describedby="helper-responsabilities"
											value={work.responsabilities}
											onChange={(e) =>
												handleWorkExperienceChange(
													i,
													e.target.value,
													"responsabilities"
												)
											}
										/>
										<FormHelperText id="helper-responsabilities">
											Describe your main rasponsabilities
										</FormHelperText>
									</FormControl>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);

	return (
		<>
			<div className="container">
				<div className="sidebar">{form}</div>
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
		</>
	);
}

//quedo andando todo teoricamente, agregar funcion descargar pdf
