import React, {useState} from 'react';
import { useMediaQuery, AppBar, Toolbar, Tab, Tabs, IconButton, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-scroll'
import MenuIcon from '@material-ui/icons/Menu';
import icon from "../../static/images/favicon.png"

const Style = makeStyles(() => ({
    opaque: {
        transition: "0.5s",
        background: "#000000",
    },
    transparent: {
        transition: "0.5s",
        paddingTop: "1%",
        background: "transparent",
    },
    logo: {
        transition: "0.5s",
        paddingTop: "1vh",
        paddingBottom: "1vh",
        width: "7vh",
        height: "auto",
        cursor: "pointer",
        "&:hover": {
            transition: "0.5s",
            width: "10vh"
        }
    },
    space: {
        flexGrow: 1
    },
    tabs: {
        minWidth: 110,
        fontFamily: "Tahoma",
        fontSize: "110%",
        fontWeight: "500",
        color: "#ffffff",
        '&:hover': {
            transition: "0.5s",
            color: "white"
        }
    },
    drawerTabSpacing: {
        display: "flex",
        justifyContent: "center",
		color: "black",
		padding: "5px"
    },
    icon: {
        color: "white",
        fontSize: "115%"
    },
	paper: {
		background: 'black'
	}
}))

const allTabs = [
	{label: "Home", to: "home", offset1: 0, offset2: 0},
	{label: "About", to: "about", offset1: -70, offset2: -60},
	{label: "Experience", to: "experience", offset1: -70, offset2: -60},
	{label: "Projects", to: "projects", offset1: -70, offset2: -60},
]

const Navigation = () => {
	const classes = Style();

	const isLargeScreen = useMediaQuery('(min-width: 750px)');
	const isSmallScreen = useMediaQuery('(max-width: 750px)');

	const [state, setState] = useState({left:false});
	const [background, setBackground] = useState('transparent');

    const toggleDrawer = (anchor, open) => (event) => setState({ ...state, [anchor]: open });

    const navRef = React.useRef();
    navRef.current = background;

    React.useEffect(() => {
        const handleScroll = () => {
			window.scrollY > 0.2 ? setBackground('opaque') : setBackground('transparent');
        }
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div>
            <AppBar elevation={0} className={classes[navRef.current]}>
                <Toolbar>
                    <div style={{ marginRight: "1%" }} />
                    <Link smooth="true" duration={1000} to="home">
                        <img alt="logo" className={classes.logo} src={icon}></img>
                    </Link>

                    <div className={classes.space} />

                    {isLargeScreen && <>
                        <Tabs aria-label="tabs">
						{allTabs && allTabs.map((tab, idx) => (
                            <Link smooth="true" duration={1000} offset={tab.offset1} to={tab.to}>
                                <Tab className={classes.tabs} label={tab.label} />
                            </Link>
                        ))}
                        </Tabs>
                    </>}

                    {isSmallScreen && <>
                        <IconButton onClick={toggleDrawer("left", true)} aria-label="menu">
                            <MenuIcon className={classes.icon} />
                        </IconButton>
                        <Drawer 
							classes={{ paper: classes.paper }}
							variant='temporary' 
							anchor='left' 
							open={state['left']} 
							onClose={toggleDrawer('left', false)}>
                            <div
								classes={{ root: classes.root }}
                                role="presentation"
                                onClick={toggleDrawer("left", false)}
                                onKeyDown={toggleDrawer("left", false)}
                            >
                                <Tabs orientation="vertical">
									{allTabs && allTabs.map((tab, idx) => (
                                        <Link smooth="true" duration={1000} offset={tab.offset2} to={tab.to}>
                                            <div className={classes.drawerTabSpacing}>
                                                <Tab onClick={toggleDrawer("left", false)} className={classes.tabs} label={tab.label} />
                                            </div>
                                        </Link>
                                    ))}
                                </Tabs>
                            </div>
                        </Drawer>
                    </>}

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navigation;