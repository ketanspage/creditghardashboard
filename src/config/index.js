const config = {
    development: {
      BASE_URL:process.env.REACT_APP_BASE_URL,
      API_KEY: 'your-development-api-key',
    },
    production: {
      BASE_URL: process.env.REACT_APP_BASE_URL,
      API_KEY: 'your-production-api-key',
    },
  };
  
  export default config;