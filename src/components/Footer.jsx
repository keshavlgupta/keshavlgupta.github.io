import React from 'react'
import { makeStyles } from '@material-ui/styles';

const Style = makeStyles((theme) => ({
	footer: {
		display: "flex",
		background: "black",
		height: "8vh",
		color: "white",
		justifyContent: "center",
		alignItems: "center",
		fontFamily: "Tahoma",
	},
	textContainer: {
		display: "inline-block",
		textAlign: "center"
	}
}))

const Footer = () => {
	const classes = Style();

	return (
		<div className={classes.footer}>
			<div className={classes.textContainer}>
				<span style={{ color: "grey" }}>'There are <b>no frames</b>, there are <b>no boundaries</b>.' - Russell Schweickart</span>
			</div>
		</div>
	)
}

export default Footer;