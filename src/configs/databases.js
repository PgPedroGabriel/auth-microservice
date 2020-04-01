require('dotenv/config');

const relational = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  logging: process.env.NODE_ENV === 'dev',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};

module.exports = relational;
