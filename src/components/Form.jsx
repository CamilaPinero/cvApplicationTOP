/* eslint-disable react/prop-types */
import {
	Typography,
	Input,
	InputLabel,
	FormHelperText,
	Toolbar,
	Divider,
	IconButton,
	Button,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";

export function Form(props) {
	return (
		<>
			<div>
				<Toolbar>
					<Typography
						variant="h4"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						CV GENERATOR
					</Typography>
					<Button onClick={props.handlePrint}>Download PDF</Button>
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
							onChange={props.handleFullName}
							value={props.fullName}
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
							onChange={props.handleEmail}
							value={props.email}
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
							onChange={props.handlePhone}
							value={props.phone}
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
							onChange={props.handleAddress}
							value={props.address}
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
							onClick={props.addEducationalExperience}
						>
							+
						</IconButton>
					</div>
					<ul className="studySection">
						{props.educationalExperienceArray.map((ee, i) => (
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
												props.handleEducationalExperienceChange(
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
												props.handleEducationalExperienceChange(
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
												props.handleEducationalExperienceChange(
													i,
													e.target.value,
													"dateStart"
												)
											}
										/>
										<FormHelperText id="helper-study-date-start">
											Enter the start year
										</FormHelperText>
									</FormControl>
									<FormControl>
										<Input
											type="number"
											id="study-date-end"
											aria-describedby="helper-study-date-end"
											value={ee.dateEnd}
											onChange={(e) => {
												props.handleEducationalExperienceChange(
													i,
													e.target.value,
													"dateEnd"
												);
											}}
										/>
										<FormHelperText id="helper-study-date-end">
											Enter the end year
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
							onClick={props.addWorkExperience}
						>
							+
						</IconButton>
					</div>

					<ul className="workSection">
						{props.workExperienceArray.map((work, i) => (
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
												props.handleWorkExperienceChange(
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
												props.handleWorkExperienceChange(
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
												props.handleWorkExperienceChange(
													i,
													e.target.value,
													"dateStart"
												)
											}
										/>
										<FormHelperText id="helper-work-date-start">
											Enter the start year
										</FormHelperText>
									</FormControl>
									<FormControl>
										<Input
											type="number"
											id="work-date-end"
											aria-describedby="helper-work-date-end"
											value={work.dateEnd}
											onChange={(e) =>
												props.handleWorkExperienceChange(
													i,
													e.target.value,
													"dateEnd"
												)
											}
										/>
										<FormHelperText id="helper-work-date-end">
											Enter the end year
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
												props.handleWorkExperienceChange(
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
}
