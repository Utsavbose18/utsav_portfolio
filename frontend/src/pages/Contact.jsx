import { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import api from '../services/api';

const socialLinks = [
  { label: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/utsav-bose-197708298' },
  { label: 'GitHub', icon: <FaGithub />, href: 'https://github.com/Utsavbose18' },
  { label: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com/bosejr18' },
  { label: 'WhatsApp', icon: <FaWhatsapp />, href: 'https://wa.me/9903166306' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await api.post('/messages', form);
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="page">
      <div className="page-head">
        <span className="eyebrow">Contact</span>
        <h1>Let’s build something useful.</h1>
        <p>Available for internships, freelance work and full stack developer roles.</p>
      </div>

      <div className="contact-grid">
        <form className="form glass-card" onSubmit={submit}>
          <div className="form-grid">
            <input name="name" placeholder="Your name" value={form.name} onChange={onChange} required />
            <input name="email" type="email" placeholder="Your email" value={form.email} onChange={onChange} required />
          </div>
          <input name="subject" placeholder="Subject" value={form.subject} onChange={onChange} />
          <textarea name="message" rows="7" placeholder="Tell me about the role or project" value={form.message} onChange={onChange} required />
          <button className="btn primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'sent' && <p className="ok">Thanks. Your message has been sent successfully.</p>}
          {status === 'error' && <p className="err">Something went wrong. Please check the backend/API URL and try again.</p>}
        </form>

        <aside className="glass-card contact-side">
          <h3>Quick Info</h3>
          <p><strong>Email:</strong> Add your email here</p>
          <p><strong>Location:</strong> Bengaluru, India</p>
          <p><strong>Status:</strong> Open to internships and fresher roles</p>
          <div className="social-links">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                {item.icon}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
