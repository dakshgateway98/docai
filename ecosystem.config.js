module.exports = {
    apps: [
      {
        name: 'react-app',
        script: 'npm run serve',
        env: {
          PM2_SERVE_PORT: 4173,
          PM2_SERVE_PATH: './dist',
          NODE_ENV: 'production'
        }
      }
    ]
  };
  