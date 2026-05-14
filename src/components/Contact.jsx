import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (Demo)');
    };

    return (
        <section className="contact" id="contact">
            <div className="contact_pattern"></div>
            <div className="contact_wrapper">
                <div className="contact_header">
                    <span className="contact_label">Get In Touch</span>
                    <h2 className="contact_title">
                        Let's Create<br />
                        <span className="contact_title_accent">Together</span>
                    </h2>
                </div>
                <form className="contact_form" onSubmit={handleSubmit}>
                    <div className="form_row">
                        <div className="form_group">
                            <label className="form_label">First Name</label>
                            <input type="text" className="form_input" placeholder="John" required />
                        </div>
                        <div className="form_group">
                            <label className="form_label">Last Name</label>
                            <input type="text" className="form_input" placeholder="Doe" required />
                        </div>
                    </div>
                    <div className="form_group form_group_full">
                        <label className="form_label">Email Address</label>
                        <input type="email" className="form_input" placeholder="hello@studio.com" required />
                    </div>
                    <div className="form_group form_group_full">
                        <label className="form_label">Your Message</label>
                        <textarea className="form_textarea" placeholder="Tell us about your project, timeline, and budget..." required></textarea>
                    </div>
                    <button type="submit" className="form_submit">
                        Send Message
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;