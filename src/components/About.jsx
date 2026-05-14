import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about_pattern"></div>
            <div className="about_wrapper">
                <div className="about_content-grid">
                    <div className="about_header">
                        <span className="about_label">Our Tools</span>
                        <h2 className="about_title">
                            Powerful
                            <span className="about_title_italic">Creative</span>
                            Suite
                        </h2>
                    </div>
                    <div className="about_body">
                        <p className="about_description">
                            Professional-grade tools to transform your creative workflow. From precision reframing to intelligent background removal — every feature is built for speed and quality.
                        </p>
                        <div className="about_features">
                            <div className="about_feature">
                                <div className="about_feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                                        <path d="M3 9h18M9 21V9"/>
                                    </svg>
                                </div>
                                <h3 className="about_feature-title">Reframe</h3>
                                <p className="about_feature-text">Smart composition for any format</p>
                            </div>
                            <div className="about_feature">
                                <div className="about_feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 7h-3a2 2 0 01-2-2V2"/>
                                        <path d="M9 18a2 2 0 01-2 2H4"/>
                                        <circle cx="9" cy="9" r="7"/>
                                        <path d="M15 15l4.5 4.5"/>
                                    </svg>
                                </div>
                                <h3 className="about_feature-title">Background Removal</h3>
                                <p className="about_feature-text">AI-powered cutouts in seconds</p>
                            </div>
                            <div className="about_feature">
                                <div className="about_feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                    </svg>
                                </div>
                                <h3 className="about_feature-title">Color Grade</h3>
                                <p className="about_feature-text">Cinematic palettes, one click</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about_cta">
                    <button className="about_cta_button">Explore All Tools</button>
                </div>
            </div>
        </section>
    );
};

export default About;
