import React from 'react';
import Seo from "../components/seo";
import { Helmet } from "react-helmet";
import SplashScreen from '../components/SplashScreen';

const NotFoundPage = () => (
<div className="not-found">
        <Helmet htmlAttributes={{itemtype: 'notfound'}} >
            <style>{`
                h1 {
                    font-family: 'Segoe UI Light';
                    font-weight: 300;
                    color: #fff;
                }
                
                html[itemtype='notfound'] body {
                    font-family: 'Segoe UI';
                    color: #fff;
                    background: #000000;
                    margin: 0;
                }
                
                .not-found main {
                    margin: 4% 10%;
                }
                
                .emotion {
                    font-size: 8em;
                    margin: 0;
                }
            `}</style>
        </Helmet>
		<Seo title={"Not Found"}/>
        <main>
			<SplashScreen/>
            <header>
                <h1 className="emotion">404 Not Found</h1>
            </header>
            <p>Hey, who turned out the lights? </p><a rel="noreferrer" href="https://www.youtube.com/watch?v=mI7ZpwpdgXs" target="_blank"><p>(Doctor Who S04:E09)</p></a>
        </main>
      </div>
)

export default NotFoundPage