# Notes API

A simple Notes API built using Node.js and Express.

## Features

* Get all notes
* Get note by ID
* Create a note
* Update a note
* Delete a note
* Custom logger middleware
* Environment variables using dotenv

## Technologies

* Node.js
* Express.js
* dotenv

## Installation

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
```

Start the server:

```bash
node script.js
```

## API Endpoints

### Get all notes

```http
GET /notes
```

### Get note by ID

```http
GET /notes/:id
```

### Create note

```http
POST /notes
```

Body:

```json
{
  "title": "Learn Express"
}
```

### Update note

```http
PUT /notes/:id
```

Body:

```json
{
  "title": "Updated Note"
}
```

### Delete note

```http
DELETE /notes/:id
```

## Project Structure

```text
notes-api/
│
├── controllers/
├── routes/
├── middleware/
├── data/
├── .env
├── .gitignore
├── package.json
└── script.js
```
