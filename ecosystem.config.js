module.exports = {
  apps: [
    {
      name: 'backend-container',
      script: 'docker-compose up -d backend-site-api',
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
