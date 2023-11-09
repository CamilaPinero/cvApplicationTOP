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

function CvPreview({ fullName, email, phone, address, study }) {
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
					<li>
						<div className="study-1">
							<Typography variant="h5">Veterinaria</Typography>
							<Typography variant="h6">
								Universidad Nacional de Rio Cuarto
							</Typography>
							<Typography variant="h6" gutterBottom>
								2016-2022
							</Typography>
						</div>
					</li>
				</ul>
			</div>
			<div className="work-info">
				<Typography variant="h4" gutterBottom>
					Work experience
				</Typography>
				<ul>
					<li>
						<div className="work-1">
							<Typography variant="h5">
								Atención al cliente
							</Typography>
							<Typography variant="h6">
								Veterinaria Avellaneda
							</Typography>
							<Typography variant="h6">2018-2020</Typography>
							<Typography variant="subtitle1" gutterBottom>
								subtitle1. Lorem ipsum dolor sit amet,
								consectetur adipisicing elit. Quos blanditiis
								tenetur
							</Typography>
						</div>
					</li>
					<li>
						<div className="work-2">
							<Typography variant="h5">
								Ayudante de veterinaria
							</Typography>
							<Typography variant="h6">
								Veterinaria Avellaneda
							</Typography>
							<Typography variant="h6">2020-2023</Typography>
							<Typography variant="subtitle1" gutterBottom>
								subtitle1. Lorem ipsum dolor sit amet,
								consectetur adipisicing elit. Quos blanditiis
								tenetur
							</Typography>
						</div>
					</li>
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

	const [study, setStudy] = useState([
		{ title: "", school: "", dateStart: "", dateEnd: "" },
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

	function handleTitle(e) {
		return e.target.value;
	}

	function handleStudy(title, school, dateStart, dateEnd) {
		let newStudy = {
			title: title,
			school: school,
			dateStart: dateStart,
			dateEnd: dateEnd,
		};
	}

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

				<form noValidate autoComplete="off">
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
						>
							+
						</IconButton>
					</div>

					<div className="sectionBody">
						<FormControl>
							<InputLabel htmlFor="school-name">
								School name
							</InputLabel>
							<Input
								type="text"
								id="school-name"
								aria-describedby="helper-school-name"
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
							/>
							<FormHelperText id="helper-title">
								Enter the title of your study
							</FormHelperText>
						</FormControl>
						<FormControl>
							<Input
								type="date"
								id="study-date-start"
								aria-describedby="helper-study-date-start"
							/>
							<FormHelperText id="helper-study-date-start">
								Enter the start date
							</FormHelperText>
						</FormControl>
						<FormControl>
							<Input
								type="date"
								id="study-date-end"
								aria-describedby="helper-study-date-end"
							/>
							<FormHelperText id="helper-study-date-end">
								Enter the end date
							</FormHelperText>
						</FormControl>
					</div>
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
						>
							+
						</IconButton>
					</div>
					<div className="sectionBody">
						<FormControl>
							<InputLabel htmlFor="company-name">
								Company name
							</InputLabel>
							<Input
								type="text"
								id="company-name"
								aria-describedby="helper-company-name"
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
							/>
							<FormHelperText id="helper-position">
								Enter the title of your position
							</FormHelperText>
						</FormControl>

						<FormControl>
							<Input
								type="date"
								id="work-date-start"
								aria-describedby="helper-work-date-start"
							/>
							<FormHelperText id="helper-work-date-start">
								Enter the start date
							</FormHelperText>
						</FormControl>
						<FormControl>
							<Input
								type="date"
								id="work-date-end"
								aria-describedby="helper-work-date-end"
							/>
							<FormHelperText id="helper-work-date-end">
								Enter the end date
							</FormHelperText>
						</FormControl>
						<FormControl sx={{ gridRow: "3", gridColumn: "1/-1" }}>
							<InputLabel htmlFor="responsabilities">
								Main responsabilities
							</InputLabel>
							<Input
								type="textfield"
								id="responsabilities"
								aria-describedby="helper-responsabilities"
							/>
							<FormHelperText id="helper-responsabilities">
								Describe your main rasponsabilities
							</FormHelperText>
						</FormControl>
					</div>
				</form>
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
						/>
					</div>
				</div>
			</div>
		</>
	);
}

//arreglar que se sale
//alineacion
//
