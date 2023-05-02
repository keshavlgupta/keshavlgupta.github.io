import React from "react";
import {
  Grid,
  Typography,
  Divider,
  Button,
  useMediaQuery,
  Fade,
} from "@material-ui/core";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { makeStyles } from '@material-ui/styles';
import links from "../../static/skills"

const Style = makeStyles((theme) => ({
	root: {
		background: 'white'
	},
	title: {
		textAlign: "center",
		color: 'black'
	},
	subTitle: {
    	fontWeight: "600",
		color: 'black',
	},
	subTitleSmall: {
		fontWeight: "600"
	},
	picSpacing: {
		height: "80%",
		display: "flex",
		alignItems: "center",
	},
	profilePic: {
		transition: "0.3s",
		width: "80%",
		height: "auto",
		"&:hover": {
			transition: "0.3s",
			boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
		}
	},
	skills: {
		display: "inline-block",
		"&:hover": {
			transition: "0.3s",
			color: "grey"
		}
	},
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
	}
}))

const AboutMe = () => {
	const classes = Style();
	const md = useMediaQuery("(max-width: 960px)");

	const [image, setImage] = React.useState(links["default"]);
	const [fade, setFade] = React.useState(true);

	const languages = [
		"JavaScript",
		"TypeScript",
		"Python",
		"C",
		"C++",
		"C#",
		"GraphQL",
		"Java",
		"Swift",
		"SQL", 
		"HTML",
		"CSS",
    "Go"
	];

	const technologies = [
		"Node",
		"React",
		"React Native",
		"Redux",
		"Vue",
		"Flutter",
		"Express",
		".NET",
		"Flask",
		"Django",
	]

	const tools = [
		"Azure",
		"AWS",
		"Heroku",
		"Git",
		"Apollo",
		"Docker",
		"Kubernetes",
		"PostgreSQL",
		"MongoDB",
		"Firebase"
	];

	const changeImg = (language) => {
		setFade(false);
		setTimeout(() => {
			setImage(links[language]);
			setFade(true);
		}, 200);
	};
  
	  return (
    <Grid id="about" className={classes.root} container>
      {/* Title */}
      <Grid className={classes.title} item xs={12}>
        <br />
        <Typography variant="h2">About Me</Typography>
        <br />
        <br />
        <br />
      </Grid>
      <Grid item xs={1}></Grid>
      {md && <Grid item xs={1}></Grid>}
      <Fade in={fade}>
        <Grid item xs={10} md={5}>
          <div className={classes.picSpacing}>
            <img alt="skill" src={image} className={classes.profilePic}></img>
          </div>
        </Grid>
      </Fade>
      {md && <Grid item xs={1}></Grid>}

      {/* Text */}
      <Grid item xs={10} md={5}>
        <Typography display="inline" variant="body1">
          I am a third year Honours Computer Science (Co-Op) student at the <b>University of Waterloo</b>.<br/><br/>
		  I have completed <b>three internships</b> and <b>one research term</b> so far. During my third internship, I was a <b>Software Developer</b> at <b>Bentley Systems</b>,
      developing new features and machine learning models for their digital twin platform, using .NET, C++, and Python.<br/><br/>
		  I am a member of WATonomous, a student design team with 100+ participants, 
		  creating level 4 self-driving vehicle software using embedded C++.<br/><br/>When I am not programming, I love swimming,
		  martial arts, and&nbsp;
		  </Typography>
		  <Typography onMouseEnter={() => changeImg('photography')}
		  			onMouseLeave={() => changeImg("default")} 
					style={{color: 'grey'}}
					display="inline" 
					variant="body1">
					photography
			</Typography>
		  <Typography display="inline" variant="body1">! I am a certified lifeguard and a black-belt in Tae-Kwon-Do.
		  You can reach me through any of the links below.<br/><br/>
          <b>Currrently seeking internships for Summer 2024.</b>
        </Typography>
		<br/>
		<Divider/>
		<br/>
        <Typography
          variant="body1"
          className={classes.subTitleSmall}
          display="inline"
        >
          Languages
        </Typography>

		<br/>
		<Divider />
        {languages.map((tech, idx) => (
          <Typography
            onMouseEnter={() => changeImg(tech)}
            onMouseLeave={() => changeImg("default")}
            className={classes.skills}
            key={tech}
            variant="body1"
          >
            {tech}{idx === languages.length - 1 ? "" : ','}&nbsp;
          </Typography>
        ))}
		<div/>
		<br/>

        <Typography
          variant="body1"
          className={classes.subTitleSmall}
          display="inline"
        >
          Technologies
        </Typography>

		<br/>
		<Divider />
        {technologies.map((tech, idx) => (
          <Typography
            onMouseEnter={() => changeImg(tech)}
            onMouseLeave={() => changeImg("default")}
            className={classes.skills}
            key={tech}
            variant="body1"
          >
            {tech}{idx === technologies.length - 1 ? "" : ','}&nbsp;
          </Typography>
        ))}
        <div />
		<br/>

        <Typography
          variant="body1"
          className={classes.subTitleSmall}
          display="inline"
        >
          Tools
        </Typography>
		<br/>
		<Divider/>
        {tools.map((tool, idx) => (
          <Typography
            onMouseEnter={() => changeImg(tool)}
            onMouseLeave={() => changeImg("default")}
            className={classes.skills}
            key={tool}
            variant="body1"
          >
            {tool}{idx === tools.length - 1 ? "" : ','}&nbsp;
          </Typography>
        ))}
        <div />
		<br/>
		
        <Grid container>
          <Grid item xs={12} md={3}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Kggupta"
              className={classes.links}
            >
              <div className={classes.buttonSpacing}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                  startIcon={<FaGithub />}
                >
                  Github
                </Button>
              </div>
            </a>
            {md && <br />}
          </Grid>
          <Grid item xs={12} md={3}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/keshavlgupta/"
              className={classes.links}
            >
              <div className={classes.buttonSpacing}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                  startIcon={<FaLinkedin />}
                >
                  LinkedIn
                </Button>
              </div>
            </a>
            {md && <br />}
          </Grid>
          <Grid item xs={12} md={3}>
          <a
              rel="noreferrer"
              target="_blank"
              href="mailto:keshav.gupta@uwaterloo.ca"
              className={classes.links}
            >
              <div className={classes.buttonSpacing}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                  startIcon={<MdEmail />}
                >
                  Contact
                </Button>
              </div>
            </a>
            {md && <br />}
          </Grid>
        </Grid>
      </Grid>
      {md && <Grid item xs={1}></Grid>}

      {/* Bottom */}
      <Grid item xs={12}>
        <div style={{ paddingBottom: "7%" }} />
      </Grid>
    </Grid>
  );
  };
  
export default AboutMe;