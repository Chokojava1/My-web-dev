import React, { useState } from "react";
import './contact.css';

const Contact = () => {
    const [user, setUser] = useState({
        Name: '', Email: '', Subject: '', Message: ''
    });

    // Handle input changes
    const data = (e) => {
        const { name, value } = e.target; 
        setUser({ ...user, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(user); 
        alert('Your message has been sent successfully!');
        setUser({ Name: '', Email: '', Subject: '', Message: '' }); 
    };

    return (
        <>
            <div className="contact_container">
                <div className="contant">
                    <h2># Contact Us</h2>
                    <div className="form">
                        <form method="POST" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="Name"
                                value={user.Name}
                                placeholder="Enter Your Full Name"
                                required
                                autoComplete="off"
                                onChange={data}
                            />
                            <input
                                type="email"
                                name="Email"
                                value={user.Email}
                                placeholder="Enter Your Email"
                                required
                                autoComplete="off"
                                onChange={data}
                            />
                            <input
                                type="text"
                                name="Subject"
                                value={user.Subject}
                                placeholder="Enter Your Subject"
                                required
                                autoComplete="off"
                                onChange={data}
                            />
                            <textarea
                                name="Message"
                                value={user.Message}
                                placeholder="Your Message"
                                required
                                autoComplete="off"
                                onChange={data}
                            />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
