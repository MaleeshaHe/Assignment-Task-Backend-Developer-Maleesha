# Backend API (MySQL with Sequelize ORM)

A Node.js + Express REST API using MySQL and Sequelize ORM.  
Features user registration/login and CRUD operations for a Product model.

## Features

- User registration and login
- CRUD operations for Product (`name`, `price`, `quantity`)
- MySQL integration using Sequelize ORM

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd backend-api\ MYSQL\ with\ Sequelize\ ORM
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure your database connection in [`config/config.json`](config/config.json).

4. Run migrations to create tables:

   ```sh
   npx sequelize-cli db:migrate
   ```

5. Start the server:

   ```sh
   npm run dev
   ```

   Or for production:

   ```sh
   npm start
   ```

## API Endpoints

### User

- `POST /users/register` — Register a new user  
  **Body:**

  ```json
  {
    "username": "testuser",
    "password": "password123"
  }
  ```

- `POST /users/login` — Login  
  **Body:**
  ```json
  {
    "username": "testuser",
    "password": "password123"
  }
  ```

### Product

- `POST /products` — Create product
- `GET /products` — List all products
- `GET /products/:id` — Get product by ID
- `PUT /products/:id` — Update product
- `DELETE /products/:id` — Delete product

**Example Product Body:**

```json
{
  "name": "Sample Product",
  "price": 19.99,
  "quantity": 10
}
```
