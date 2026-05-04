import nodemailer from 'nodemailer';

export const sendEmail = async (savedMessage) => {
  const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, MAIL_TO } = process.env;
  if (!MAIL_HOST || !MAIL_USER || !MAIL_PASS || !MAIL_TO) {
    throw new Error('Email not configured (set MAIL_* in .env)');
  }

  const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: Number(MAIL_PORT || 587),
    secure: false,
    auth: { user: MAIL_USER, pass: MAIL_PASS }
  });

  const info = await transporter.sendMail({
    from: `Portfolio Bot <${MAIL_USER}>`,
    to: MAIL_TO,
    subject: `New Contact: ${savedMessage.subject || 'No subject'}`,
    text: `From: ${savedMessage.name} <${savedMessage.email}>\n\n${savedMessage.message}`
  });

  console.log('Mail sent:', info.messageId);
};
