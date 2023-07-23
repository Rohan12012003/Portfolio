import React, { useState } from "react";

function Contact() {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to the server)
        console.log(formData);
    };


    return (
        <div className="contact" id="contact" style={{ paddingTop: "80px" }}>
            <h3>Contact Me</h3>
            <hr />
            <p>Feel free to Contact me by submitting the form below.</p>
            <form onSubmit={handleSubmit} className="contact-form col-10">
                <label htmlFor="name">Name:</label>
                <div>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="col-8"
                    />
                </div>
                <label htmlFor="email">Email:</label>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="col-8"
                    />
                </div>
                <label htmlFor="phone">Phone:</label>
                <div>

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="col-8"
                    />
                </div>
                <label htmlFor="message">Message:</label>
                <div>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                        className="col-8"
                    />
                </div>
                <div>
                    <button className="btn btn-info" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;