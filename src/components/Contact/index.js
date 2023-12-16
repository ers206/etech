import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

// not sure I want a form here. Maybe a phone number and email a link to FB page
function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState); 
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };
// want to change this maybe just have an email and phone link 
  return (
    <section>
      {/* this is on the header I probably dont need this */}
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" mailto="mailto:owner@etechinnovations.com" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;


// added mailto section above didnt work********************

// import React from "react";
// import { Link } from "react-router-dom";

// const ButtonMailto = ({ mailto, label }) => {
//     return (
//         <Link
//             to='#'
//             onClick={(e) => {
//                 window.location.href = mailto;
//                 e.preventDefault();
//             }}
//         >
//             {label}
//         </Link>
//     );
// };

// export default ButtonMailto;

{/* <ButtonMailto label="Write me an E-Mail" mailto="mailto:no-reply@example.com" /> */}