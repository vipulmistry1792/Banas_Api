const env = process.env;

const config = {
  db: { 
    user:env.DB_USER ||'sa',
    password:env.DB_PASSWORD || 'Velox@123',
    server:env.DB_HOST || 'ESOS\WINCC',
    database:env.DB_NAME || 'misc_report',
  	port:env.DB_PORT || 1443,
  	encrypt: false

  },
  listPerPage: env.LIST_PER_PAGE || 30,
};
  
module.exports = config;
