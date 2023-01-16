import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid } from "@material-ui/core";
import projects from '../../static/projects'
import ListCard from './ListCard';
import { Typography } from '@mui/material';
import "./Projects.css"

const Style = makeStyles(() => ({
	title: {
		textAlign: "center",
		color: 'black'
	},
	main: {
		background: "white",
		alignItems:"center"
	},
	card: {
		alignItems: "center",
		padding: "20px",
		paddingLeft:"5%",
		width:"90%",
	}
}))

const Projects = () => {
	const classes = Style();

	return (
		<div>
			<Grid id="projects"
			alignItems="center"
			justify="center"
			className={classes.main}>
			<br />
			<div className={classes.title}>
				<Typography variant='h2'>Projects</Typography>
			</div>
			{<div class="center-cards" className={classes.card} >
				{projects.map(project => (
				<div class="center-cards" className={classes.card}>
				<ListCard image={project.image} title={project.title} 
						website={project.website} details={project.details} 
						source={project.source}/>
				</div>))
				}
			</div>}
		</Grid>
		</div>
	);
}

export default Projects;