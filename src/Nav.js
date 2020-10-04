import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://cdn-images-1.medium.com/max/1000/1*vlCoDDQ_H_9PBEDQ7K94Hg.png"
                alt="Netflix Logo"
             />
             <img
                className="nav__avatar"
                src="https://cdn-images-1.medium.com/max/750/1*i2HBuWmNU78kbh4kUkDr7g.png"
                alt="Avatar"
              />
        </div>
    )
}

export default Nav
