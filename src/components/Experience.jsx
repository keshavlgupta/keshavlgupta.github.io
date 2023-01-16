import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { IoBriefcase, IoBook, IoGlobeOutline } from "react-icons/io5";
import timeline from '../../static/timeline'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import "./Experience.css"
import { IconButton, Typography, useMediaQuery } from '@mui/material';

const Style = makeStyles(() => ({
	button: {
		backgroundColor: "#000000",
		color: 'white',
		borderRadius: 20,
		marginRight: "2%",
		textTransform: "none",
		width: "90%",
		"&:hover": {
			transition: "0.3s",
			color: "black",
			backgroundColor: 'white',
		}
	},
	buttonSpacing: {
		display: "flex",
		justifyContent: "center"
	},
	links: {
		textDecoration: "none"
	},
	iconButtonBorder: {
		transition: "0.3s",
		borderRadius: "55%",
		color: "white",
		border: "1px solid white",
		marginRight: "2.5vw",
		'&:hover': {
			backgroundColor: "#FFFFFF",
			color: "#0644A3",
			transition: "0.3s"
        }
	},
	title: {
		textAlign: "center",
		color: 'black',
	},
	image: {
		height: '50px',
		display:'flex',
		justifyContent:'start'
	}
}))

const Experience = () => {
	const classes = Style();
	const isLargeScreen = useMediaQuery('(min-width: 950px)');

	const iconStyle = {
		background: 'white'
	}
	return (
		<div id="experience" className='main'>
			<br />
			<div className={classes.title}>
				<Typography variant='h2'>Experiences</Typography>
			</div>
			<br />
			<VerticalTimeline>
				{
					timeline.map(element => {
						const isWorkIcon = element.icon === "internship";
						const showButton = element.buttonText !== undefined && element.buttonText !== null &&
											element.buttonText !== "";
						return (
							<VerticalTimelineElement
								key={element.id}
								date={element.date}
								dateClassName="date"
								iconStyle={iconStyle}
								icon={isWorkIcon ? <IoBriefcase /> : <IoBook />}
							>
								{isLargeScreen && <img display="inline" src={element.logo} className={classes.image} alt="company logo" />}
								<h3 className='vertical-timeline-element-title'>{element.title} - {isWorkIcon ? "Internship" : "Research"}</h3>
								<h5 className='vertical-timeline-element-subtitle'>{element.location}</h5>
								<p id="description">{element.description}</p>
								{showButton && (
									<a display="inline" rel="noreferrer" href={element.link} target="_blank">
										<IconButton className={classes.iconButtonBorder} aria-label={element.buttonText}>
											<IoGlobeOutline className={{ width: "3vh", height: "auto"}} />
										</IconButton>
									</a>
								)}
							</VerticalTimelineElement>
						)
					})
				}
			</VerticalTimeline>
		</div>
	)
}

export default Experience;