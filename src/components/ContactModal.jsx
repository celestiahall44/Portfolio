import React, { useRef } from 'react';
import styles from '../styles/ContactModal.module.css';

// You must run: npm install emailjs-com
import emailjs from 'emailjs-com';

export default function ContactModal({ open, onClose }) {
  const formRef = useRef();

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        'service_portfolio', // <-- Replace with your EmailJS service ID
        'template_portfolio', // <-- Replace with your EmailJS template ID
        formRef.current,
        'user_XXXXXXXXXXXXXXXXXXXX' // <-- Replace with your EmailJS user/public key
      );
      alert('Message sent successfully!');
      onClose();
    } catch (err) {
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>&times;</button>
        <h2>Let's Connect!</h2>
        <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit" className={styles.submit}>Send</button>
        </form>
      </div>
    </div>
  );
}
