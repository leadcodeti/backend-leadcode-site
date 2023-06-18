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
});
