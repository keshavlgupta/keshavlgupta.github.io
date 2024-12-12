import React from "react"
import { Typography, Grid, IconButton, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMail, IoLocation, IoBriefcase } from "react-icons/io5"
import image from "../../static/images/keshav_gupta_profile.png"

const links = [
  { link: "https://github.com/keshavlgupta", label: "github" },
  { link: "https://www.linkedin.com/in/keshavlgupta/", label: "linkedin" },
  { link: "mailto:keshavlgupta1@gmail.com", label: "email" },
]

const Style = makeStyles(() => ({
  size: {
    height: "100vh",
  },
  title: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
  },
  text: {
    color: "white",
  },
  inline: {
    color: "white",
    fontFamily: "Tahoma",
    fontSize: "1.6rem",
  },
  imageCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    paddingTop: "5%",
    width: "500px",
    height: "auto",
    borderRadius: "50%",
  },
  iconButtonBorder: {
    transition: "0.3s",
    borderRadius: "55%",
    color: "white",
    border: "1px solid white",
    marginRight: "2.5vw",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#0644A3",
      transition: "0.3s",
    },
  },
  ovalButton: {
    textDecoration: "none",
    borderRadius: 20,
    borderColor: "#FFFFFF",
    color: "#FFFFFF",
    fontSize: "60%",
    marginRight: "1.5vw",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#0644A3",
      transition: "0.3s",
    },
  },
}))

function LinkIcon(props) {
  switch (props.name) {
    case "github":
      return <FaGithub className={{ width: "3vh", height: "auto" }} />
    case "linkedin":
      return <FaLinkedin className={{ width: "3vh", height: "auto" }} />
    default:
      return <IoMail className={{ width: "3vh", height: "auto" }} />
  }
}

const Home = () => {
  const classes = Style()

  const isLargeScreen = useMediaQuery("(min-width: 960px)")
  const isSmallScreen = useMediaQuery("(min-width: 380px)")

  return (
    <div id="home" className={classes.size}>
      <Grid container xs={12}>
        <Grid item xs={1} />

        {isLargeScreen && (
          <Grid className={classes.imageCell} item xs={5}>
            <img src={image} className={classes.image} alt="keshav gupta" />
          </Grid>
        )}

        <Grid item xs={5}>
          <div className={classes.title}>
            <div>
              {links.map(link => (
                <a rel="noreferrer" href={link.link} target="_blank">
                  <IconButton
                    className={classes.iconButtonBorder}
                    aria-label={link.label}
                  >
                    <LinkIcon name={link.label} />
                  </IconButton>
                </a>
              ))}
              <br />
              <br />
              <div style={{ paddingBottom: "2%" }} />
              <Typography className={classes.text} variant="h1">
                Keshav Gupta
              </Typography>
              <div className={classes.inline}>
                {isSmallScreen && (
                  <>
                    <IoBriefcase className={{ width: "3vh" }} />
                    &nbsp;
                    <p style={{ display: "inline-block" }}>
                      <b>SpaceX</b>
                    </p>
                  </>
                )}
                <br />
                {isSmallScreen && (
                  <>
                    <IoLocation className={{ width: "3vh" }} />
                    &nbsp;
                    <p style={{ display: "inline-block" }}>
                      <b>Seattle, Washington</b>
                    </p>
                  </>
                )}
                <br />
                <div style={{ paddingBottom: "2%" }} />
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={1} />
      </Grid>
    </div>
  )
}

export default Home
