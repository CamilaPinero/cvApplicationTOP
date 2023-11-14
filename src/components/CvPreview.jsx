/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
export default function CvPreview({
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
								<li key={work.id}>
									<div className="work">
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
