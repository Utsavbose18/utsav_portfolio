import { useState } from 'react';
import api from '../services/api';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
//     <section>
//       <h2>Contact</h2>
//       <form className="form" onSubmit={submit}>
//         <input name="name" placeholder="Your name" value={form.name} onChange={onChange} required />
//         <input name="email" type="email" placeholder="Your email" value={form.email} onChange={onChange} required />
//         <input name="subject" placeholder="Subject" value={form.subject} onChange={onChange} />
//         <textarea name="message" rows="6" placeholder="Message" value={form.message} onChange={onChange} required />
//         <button className="btn" type="submit" disabled={status==='sending'}>
//           {status==='sending' ? 'Sending…' : 'Send Message'}
//         </button>
//       </form>
//       {status==='sent' && <p className="ok">Thanks! I will get back to you soon.</p>}
//       {status==='error' && <p className="err">Something went wrong. Try again later.</p>}
//     </section>
//   );
// }
  <section>
      <h2>Contact</h2>
      
      {/* Contact Form */}
      <form className="form" onSubmit={submit}>
        <input name="name" placeholder="Your name" value={form.name} onChange={onChange} required />
        <input name="email" type="email" placeholder="Your email" value={form.email} onChange={onChange} required />
        <input name="subject" placeholder="Subject" value={form.subject} onChange={onChange} />
        <textarea name="message" rows="6" placeholder="Message" value={form.message} onChange={onChange} required />
        <button className="btn" type="submit" disabled={status==='sending'}>
          {status==='sending' ? 'Sending…' : 'Send Message'}
        </button>
      </form>

      {status==='sent' && <p className="ok">Thanks! I will get back to you soon.</p>}
      {status==='error' && <p className="err">Something went wrong. Try again later.</p>}

      {/* Social Links */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/utsav-bose-197708298" target="_blank" rel="noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/Utsavbose18" target="_blank" rel="noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://instagram.com/bosejr18" target="_blank" rel="noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://wa.me/9903166306" target="_blank" rel="noreferrer">
          <FaWhatsapp className="icon" />
        </a>
      </div>
    </section>
  );
}
