import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/ContactModal.module.css';
import emailjs from 'emailjs-com';

export default function ContactModal({ open, onClose }) {
  const formRef = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);

  useEffect(() => {
    if (open) {
      setEmailSent(false);
      setSendFailed(false);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        'service_4cp26t8', // <-- Replace with your EmailJS service ID
        'template_wtxo4hk', // <-- Replace with your EmailJS template ID
        formRef.current,
        'PunT1yUjK2-xsBH1z' // <-- Replace with your EmailJS user/public key
      );
      setSendFailed(false);
      setEmailSent(true);
    } catch (err) {
      setEmailSent(false);
      setSendFailed(true);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>&times;</button>
        <h2>{emailSent ? 'Email Sent!' : sendFailed ? 'Please Try Again...' : "Let's Connect!"}</h2>
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
