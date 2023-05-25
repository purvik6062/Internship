//https://w3collective.com/react-contact-form/

import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {

    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5001/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        // <form onSubmit={(e) => this.submitEmail(e)} method="POST">
        <form onSubmit={handleSubmit} method="POST" >
            <div>
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    type='text'
                    name='name'
                    // value={this.state.name}
                    // onChange={this.onNameChange.bind(this)}
                    // value={name}
                    // onChange={(e) => onChange(e)}
                    required
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    name='email'
                    // value={this.state.email}
                    // onChange={this.onEmailChange.bind(this)}
                    // value={email}
                    // onChange={(e) => onChange(e)}
                    required
                />
            </div>
            <div>
                <label htmlFor='message'>Message</label>
                <textarea
                    id='message'
                    name='message'
                    // value={this.state.message}
                    // onChange={this.onMessageChange.bind(this)}
                    // value={message}
                    // onChange={(e) => onChange(e)}
                    required
                />
            </div>
            <button type='submit' value='Send' >{status}</button>
        </form>
    );
}

export default ContactForm
