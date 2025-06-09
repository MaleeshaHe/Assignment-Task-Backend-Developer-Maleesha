# Backend API

A Node.js + Express REST API using MongoDB.  
Features user registration/login and CRUD operations for a Product model.

## Features

- User registration and login
- CRUD operations for Product (`name`, `price`, `quantity`)
- MongoDB integration

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd backend-api
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory:

   ```
   MONGODB_URI=mongodb://localhost:27017/backend-api
   PORT=3000
   ```

4. Start the server:
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

- `POST /users/login` — Login and receive
  **Body:**
  ```json
  {
    "email": "testuser@example.com",
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
