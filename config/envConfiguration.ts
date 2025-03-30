export const envConfiguration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 3334,
  api: {
    apiUrl: process.env.API_URL,
  },
  postgresdb: {
    user: process.env.POSTGRES_USER,
    db: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  },
  gmail: {
    client_id: process.env.LEADCODE_GMAIL_CLIENT_ID,
    client_secret: process.env.LEADCODE_GMAIL_CLIENT_SECRET,
    leadcode_email: process.env.LEADCODE_EMAIL,
    refresh_token: process.env.LEADCODE_GMAIL_REFRESH_TOKEN,
  },
  minio: {
    root_user: process.env.MINIO_ROOT_USER,
    root_password: process.env.MINIO_ROOT_PASSWORD,
    minio_endpoint: process.env.MINIO_ENDPOINT,
  },
});
