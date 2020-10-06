import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

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
                    <Link to="/latest">
                        <button className="home__button">Watch the Latest</button>
                    </Link>
                </div>
            </div>
            <div className="home__partition" />
            <div className="home__firstBox">
                <div className="firstBox__text">
                    <h1>Enjoy on your TV.</h1>
                    <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                </div>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
            </div>
            <div className="home__partition" />
            <div className="home__secondBox">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                <div className="secondBox__text">
                    <h1>Download your shows to watch offline.</h1>
                    <h3>Save your favourites easily and always have something to watch.</h3>
                </div>
            </div>
            <div className="home__partition" />
            
        </div>
    )
}

export default Home
