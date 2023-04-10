import Head from 'next/head';
import Layout from '@/components/Layout';
import { useState } from 'react';
import styles from '@/styles/Contact.module.scss';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Submit message here
      // Example using fetch API
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('Error submitting message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout title="Contact">
      <Head>
        <meta name="description" content="Get in touch with us" />
      </Head>
      <h1>Contact Us</h1>
      {submitted ? (
        <p className={styles.success}>Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Message
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </label>
          <button type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </Layout>
  );
}
