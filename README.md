# Express.js Todo Application with MongoDB

This is a simple Todo application built using Express.js, MongoDB with Mongoose, bcrypt for password hashing, jwt for authentication, and bodyParser for parsing JSON requests.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js installed on your machine
- MongoDB installed locally or accessible remotely
- Postman or similar tool for testing API endpoints

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/express-mongo-todo.git
```

2. Navigate to the project directory:

```bash
cd express-mongo-todo
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add the following environment variables:

```
PORT=3000
DATABASE_URL=your_mongodb_connection_string
SECRET_KEY=your_secret_key_for_jwt
```

Replace `your_mongodb_connection_string` with your MongoDB connection string and `your_secret_key_for_jwt` with your desired secret key for JWT token generation.

### Running the Application

1. Start the MongoDB server.

2. Run the application:

```bash
npm start
```

The server will start running at http://localhost:3000/.

## API Endpoints

- GET `/` - Returns a message indicating that the server is running.
- POST `/todo` - Creates a new todo item.
- GET `/todo` - Retrieves all todo items.
- GET `/todo/:id` - Retrieves a specific todo item by ID.
- PUT `/todo/:id` - Updates a specific todo item by ID.
- DELETE `/todo/:id` - Deletes a specific todo item by ID.

## Authentication

The application uses JWT for authentication. To access protected routes, include the JWT token in the Authorization header of your requests.

## Built With

- Express.js - Web framework for Node.js
- MongoDB with Mongoose - Database management
- bcrypt - Password hashing
- jwt - Authentication
- bodyParser - Request body parsing

## Acknowledgments

- - Thanks to CPDMed Team for inspiration or guidance




