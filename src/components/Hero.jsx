import React, { useEffect } from 'react';
import './Hero.css';
import gsap from 'gsap';

const Hero = () => {
    useEffect(() => {
        const headingTitle = document.querySelector('.hero_heading_title');
        const headingTitleChars = document.querySelectorAll('.hero_heading_title > h1');
        const subheadingTitle = document.querySelector('.hero_subheading_title');
        const subheadingTitleChars = document.querySelectorAll('.hero_subheading_title > h2');

        gsap.set([headingTitle, subheadingTitle], { yPercent: -250, rotate: -15 });
        gsap.set([headingTitleChars, subheadingTitleChars], { yPercent: -100 });

        gsap.timeline({ defaults: { duration: 3.2, ease: 'expo.inOut' } })
            .to([headingTitle, subheadingTitle], { yPercent: 0, rotate: 0 })
            .to([headingTitleChars, subheadingTitleChars], { yPercent: 0, stagger: 0.05 }, 0);
    }, []);

    return (
        <div className="hero">
            <div className="hero_wrapper">
                <div className="hero_heading">
                    <div className="hero_heading_title">
                        <h1>S</h1>
                        <h1>u</h1>
                        <h1>m</h1>
                        <h1>m</h1>
                        <h1>i</h1>
                    </div>
                </div>
                <div className="hero_subheading">
                    <div className="hero_subheading_title">
                        <h2>D</h2>
                        <h2>i</h2>
                        <h2>r</h2>
                        <h2>e</h2>
                        <h2>c</h2>
                        <h2>t</h2>
                        <h2>o</h2>
                        <h2>r</h2>
                        <h2>s</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;