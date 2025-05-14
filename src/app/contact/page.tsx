import React from 'react';
import './contact.css'

export default function ContactPage() {
  return (
    <main>
      <section className="contact">
        <h1 className="section-title">Contact Me</h1>
        <p className="section-subtitle">Get in touch for collaboration or questions</p>
        
        <div className="contact-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your message" rows={5} required></textarea>
            </div>
            <button type="submit" className="button primary">Send Message</button>
          </form>
          
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>prinellacyber@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>Social Media</h3>
              <div className="contact-social">
                <a href="https://www.linkedin.com/in/prisca-onyebuchi-725948226/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Prinella-cyber" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="mailto:prinellacyber@gmail.com?subject=Hello&body=I'd like to get in touch!" target="_blank" rel="noopener noreferrer">Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}