import React from 'react'
import Navigation from './Navigation'
import MainContent from './MainContent'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Projects from './Projects'
import SplashScreen from './SplashScreen'
import Footer from './Footer'

const App = () => {
	return (
		<div>
			<Navigation/>
			<SplashScreen />
			<MainContent />
			<AboutMe />
			<Experience />
			<Projects/>
			<Footer/>
		</div>
	)
}

export default App