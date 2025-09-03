import React from 'react';
import ContactForm from '../components/ContactForm';

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you! Whether you have a project idea, a question, or just want to say hello, feel free to reach out.</p>
        
        <div className="contact-info-section">
          <div className="info-card">
            <h3>Our Email</h3>
            <p><i className="fas fa-envelope"></i> info@sparcx.in</p>
          </div>
          <div className="info-card">
            <h3>Phone Number</h3>
            <p><i className="fas fa-phone"></i> +1 (123) 456-7890</p>
          </div>
          <div className="info-card">
            <h3>Our Location</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 Digital Way, Tech City, TC 98765</p>
          </div>
        </div>

        <ContactForm />

        {/* Optional: Map integration */}
        {/* <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE!2dYOUR_LONGITUDE!3dYOUR_ZOOM!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYour+Company!5e0!3m2!1sen!2sus!4v1678912345678!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div> */}
      </div>
    </div>
  );
}

export default ContactPage;
