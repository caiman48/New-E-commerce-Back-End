# E-commerce Back End 

## Description

This project aims to provide a robust backend for an e-commerce website, utilizing the latest technologies to ensure competitive performance and scalability. Built with Express.js and Sequelize, this backend integrates seamlessly with MySQL databases, supporting complex operations on product, category, and tag data.

## Installation



## Video




1. **Clone the repository:**
   
   git clone https://github.com/caiman48/New-E-commerce-Back-End
   cd your-repo-name
2. **Install dependencies:**

   npm instll

3. **Set up environment variables:**

Create a .env file in the root directory and update it with your MySQL user, password, and database name.

DB_NAME='ecommerce_db'
DB_USER='your_username'
DB_PW='your_password'

# Usage

1. **Create and seed the database**
navigate to the db folder and run : mysql -u root -p , enter your password for mysql then run " source schema.sql to create the database close mysql by writing "quit" and in the command line run " node seeds/index.js

2. **Start the server:**
npm start

## Testing API Routes

To test API routes for categories, products, and tags:

Use Insomnia Core to make GET, POST, PUT, and DELETE requests.
Ensure your API endpoints are functioning as expected by observing the JSON outputs and status codes.
Features
Connect to and manage a MySQL database using Sequelize.
CRUD operations on categories, products, and tags.
Secure storage of environment variables.

## Contributions

- Charles puestes tuttor 
- https://www.w3schools.com/

## License
N/A
