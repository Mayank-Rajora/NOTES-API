# Notes API

A RESTful Notes API built with Node.js, Express, MongoDB, and Mongoose.

## Features

* Create a note
* Get all notes
* Get a note by ID
* Update a note
* Delete a note
* MongoDB database integration
* Custom middleware
* Environment variable configuration

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Dotenv

## Installation

```bash
git clone https://github.com/Mayank-Rajora/NOTES-API.git
cd notes-api
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Run the server:

```bash
node server.js
```

For development:

```bash
npx nodemon server.js
```

## API Endpoints

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| GET    | `/notes`     | Get all notes  |
| GET    | `/notes/:id` | Get note by ID |
| POST   | `/notes`     | Create a note  |
| PUT    | `/notes/:id` | Update a note  |
| DELETE | `/notes/:id` | Delete a note  |

### Example Request

```json
{
  "title": "Learn MongoDB"
}
```

### Example Response

```json
{
  "_id": "684a5d1f3f92a84d7b7a1234",
  "title": "Learn MongoDB",
  "__v": 0
}
```

