import React from 'react';
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home__banner"
                style={{
                    backgroundSize:"cover",
                    backgroundImage:`url("https://assets.nflxext.com/ffe/siteui/vlv3/0f67308d-db59-4393-9502-8e475c69a0b5/7de023fa-e7bc-44ef-a9c3-2e6a18b9ba3c/IN-en-20200928-popsignuptwoweeks-perspective_alpha_website_small.jpg")`,
                    backgroundPosition:"center center",
                }}
            >
                <div className="home__bannerContent">
                    <h1 className="banner__main">Unlimited movies, TV shows and more.</h1>
                    <h3 className="banner__secondary">Watch Anywhere. Watch Anytime.</h3>
                    <h3 className="banner__secondary">Ready to watch?</h3>
                    <button className="home__button">Watch the Latest</button>
                </div>
            </div>
            
        </div>
    )
}

export default Home
