require('dotenv').config();

module.exports={
     dbUser : process.env.DB_USER || 'postgres',
     dbName : process.env.DB_NAME || 'countries',
     dbPassword : process.env.DB_PASSWORD || 'janica123',
     Host : process.env.HOST || 'localhost',
     PORT : process.env.PORT || '3001'

};