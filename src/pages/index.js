import * as React from "react";
import Seo from "../components/seo";
import config from "../../config.json"
import headshot from "../../static/images/keshav_gupta_profile_bg.png";
import { Helmet } from "react-helmet";
import App from "../components/App";

const Index = () => (
	<>
		<Seo title={config.title}
				description= {config.description}
				image={headshot} />
		<Helmet><title>{"Home"}</title></Helmet>
		<App/>
	</>
)

export default Index