export default () => ({
  client_id: process.env.LEADCODE_GMAIL_CLIENT_ID,
  client_secret: process.env.LEADCODE_GMAIL_CLIENT_SECRET,
  leadcode_email: process.env.LEADCODE_EMAIL,
  refresh_token: process.env.LEADCODE_GMAIL_REFRESH_TOKEN,
});
