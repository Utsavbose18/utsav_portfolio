import Message from '../models/Message.js';
import { sendEmail } from '../utils/sendEmail.js';

export const submitMessage = async (req, res) => {
  try {
    const saved = await Message.create(req.body);

    // Attempt to email; if mail not configured, skip gracefully
    try { await sendEmail(saved); } catch (e) { console.log('Mail skipped:', e.message); }

    res.status(201).json({ ok: true, saved });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
