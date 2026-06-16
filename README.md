# Notes API

A RESTful Notes API built with Node.js, Express, MongoDB, and Mongoose.

## Features

* User Registration
* User Login
* Password Hashing with bcrypt
* JWT Authentication
* Protected Routes
* User Profile Endpoint
* Create Notes
* Read Notes
* Update Notes
* Delete Notes
* Multi-User Note Ownership
* Authorization (users can only access their own notes)

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Tokens)
* bcryptjs
* dotenv

## Installation

Clone the repository:

```bash
git clone https://github.com/Mayank-Rajora/NOTES-API.git
cd notes-api
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the server:

```bash
npm run dev
```

## API Endpoints

### Authentication

#### Register User

```http
POST /auth/register
```

#### Login User

```http
POST /auth/login
```

#### Get Profile

```http
GET /auth/profile
```

Requires JWT token.

---

### Notes

#### Get All Notes

```http
GET /notes
```

Returns only notes belonging to the authenticated user.

#### Get Note By ID

```http
GET /notes/:id
```

#### Create Note

```http
POST /notes
```

#### Update Note

```http
PUT /notes/:id
```

#### Delete Note

```http
DELETE /notes/:id
```

All Notes routes require authentication.

## Security Features

* Passwords are hashed before storage.
* JWT-based authentication.
* Protected routes using middleware.
* Ownership-based authorization.
* Users cannot access, update, or delete notes belonging to other users.

## Project Structure

```text
notes-api/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── .env
├── server.js
└── package.json
```

## Future Improvements

* File Uploads
* Pagination
* Search and Filtering
* Refresh Tokens
* Full-Stack Frontend Integration

```
```

