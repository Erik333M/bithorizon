import axios from 'axios';
import { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaTelegramPlane } from 'react-icons/fa';
import './registration.css';

type TErrors = {
  email: string | null;
  telegram: string | null;
  message: string;
};

const Registration = () => {
  const [email, setEmail] = useState('');
  const [telegram, setTelegram] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState<TErrors>({} as TErrors);

  const validateForm = () => {
    let isValid = true;
    let errors = {} as TErrors;

    // Email validation
    if (!email) {
      //@ts-ignore
      errors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      //@ts-ignore
      errors.email = 'Enter a valid email address.';
      isValid = false;
    }

    // Telegram username validation
    if (!telegram) {
      //@ts-ignore
      errors.telegram = 'Telegram username is required.';
      isValid = false;
    } else if (!/^@[\w\d_]{5,}$/.test(telegram)) {
      errors.telegram =
        'Telegram must start with @ and be at least 5 characters.';
      isValid = false;
    }

    // Message validation
    if (!message) {
      errors.message = 'Message cannot be empty.';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:5001/send-email', {
        email,
        telegram,
        message,
      });

      setStatus('✅ Email sent successfully!');
      console.log('Success:', response.data);
    } catch (error) {
      setStatus('❌ Error sending email. Try again.');
      //@ts-ignore
      console.error('Error:', error.response?.data || error.message);
    }
  };

  return (
    <div className="registration-main">
      <div className="registration-container">
        <div className="registration-card">
          <h1 className="registration-title">Send Request</h1>
          <form onSubmit={handleSubmit} className="registration-form">
            {/* Email Input */}
            <div className="form-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Recipient's email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                //@ts-ignore
                className={`form-input ${errors.email ? 'input-error' : ''}`}
              />
              {/* @ts-ignore */}
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            {/* Telegram Username Input */}
            <div className="form-group">
              <FaTelegramPlane className="input-icon" />
              <input
                type="text"
                placeholder="Telegram Username (@username)"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                //@ts-ignore
                className={`form-input ${errors.telegram ? 'input-error' : ''}`}
              />
              {/* @ts-ignore */}
              {errors.telegram && (
                //@ts-ignore
                <p className="error-message">{errors.telegram}</p>
              )}
            </div>

            {/* Message Input */}
            <div className="form-group">
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                //@ts-ignore
                className={`form-textarea ${errors.message ? 'input-error' : ''}`}
              />
              {/* @ts-ignore */}
              {errors.message && (
                //@ts-ignore
                <p className="error-message">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="form-button">
              <FaPaperPlane className="button-icon" /> Send Email
            </button>
          </form>

          {/* Status Message */}
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Registration;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Registration = () => {
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');
//   const [status, setStatus] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5001/send-email', {
//         email: 'erikmeloyan32@gmail.com',
//         subject: 'Hello from Node.js!',
//         message: 'This is a test email using Nodemailer.',
//       });

//       console.log('Success:', response.data);
//     } catch (error) {
//       console.error('Error:', error.response?.data || error.message);
//     }
//   };

//   return (
//     <div className='registration-main'>
//     <div className="registration-container">
//       <h1 className="registration-title">Send Email</h1>
//       <form onSubmit={handleSubmit} className="registration-form">
//         {/* Email Input */}
//         <div className="form-group">
//           <input
//             type="email"
//             placeholder="Recipient's email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="form-input"
//           />
//         </div>

//         {/* Subject Input */}
//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             required
//             className="form-input"
//           />
//         </div>

//         {/* Message Input */}
//         <div className="form-group">
//           <textarea
//             placeholder="Your message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//             className="form-textarea"
//           />
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="form-button">Send Email</button>
//       </form>

//       {/* Status Message */}
//       {status && <p className="status-message">{status}</p>}
//     </div>
//     </div>
//   );
// };

// export default Registration;
