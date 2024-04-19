import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

// Mapping between platform names and corresponding Font Awesome icons
const platformIcons = {
  LinkedIn: faLinkedin,
  Instagram: faInstagram,
  Twitter: faTwitter,
  Facebook: faFacebook
};


function Contact({ emailID, phone, address, social_handles }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', { fullName, email, subject, message });
   
    setFullName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setIsMessageSent(true); 
  };

  return (
    <section className="ftco-section" id="contact-section">
      <div className="container">
        <div className="row justify-content-center pb-1">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2 font-bold">Contact</h1>
            <h2 className="mb-4 text-white font-semibold">Get In Touch</h2>
          </div>
        </div>
        <div className="row block-9">
          <div className="col-md-6 px-5 order-md-last pb-4 pr-md-5">
            <form onSubmit={handleSubmit} className="contact-form bg-slate-300 p-2 rounded-lg">
              <div className="form-group p-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group p-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group p-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="form-group p-2">
                <textarea
                  className="form-control"
                  cols="30"
                  rows="7"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="form-group p-2 flex justify-center">
                <button type="submit" className="btn btn-dark bg-pink-800  px-3">
                  Send Message
                </button>
              </div>
              {isMessageSent && ( // Conditionally render a success message if message is sent
          
            <div className="flex justify-center pb-2 text-green-700">
              <h3>Your message has been sent successfully!</h3>
            </div>
          
        )}
            </form>
          </div>
          
            <div className="col-md-6 p-5 flex justify-center ">
             <div className=''>
             <h1 className='font-bold p-2 text-xl md:text-2xl'>Get in touch</h1>
                <h2 className='font-bold p-2 text-2xl md:text-4xl text-pink-700'><FontAwesomeIcon icon={faEnvelope} /> {emailID}</h2>
                <h3 className='font-bold p-2 text-slate-200'><FontAwesomeIcon icon={faPhone} /> {phone}</h3>
                <p className='font-bold p-2 text-slate-200'><FontAwesomeIcon icon={faMapMarkerAlt} />{address}</p>
                <p className='font-bold py-4 md:flex md:justify-between text-slate-200'>
                  {social_handles.map((handle, index) => (
                    <span className='hover:underline mr-2' key={index}><FontAwesomeIcon icon={platformIcons[handle.platform]} /> {handle.platform}</span>
                  ))}
                </p>
              </div>
           
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Contact;
