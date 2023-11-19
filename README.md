# Top Gun Lab Course - Module 3 Project

Application designed to help horse veterinarians keep track of their patients.

## Members:

- Paula Jimenez.

## API Endpoints

The application provides the following endpoints:

- `POST /horses`: Create a new horse record.
- `GET /horses/:id`: Retrieve a horse record by ID.
- `PUT /horses/:id`: Update a horse record by ID.
- `DELETE /horses/:id`: Delete a horse record by ID.

## Tech Stack

- Node.js
- Express
- Sequelize
- PostgreSQL
- Docker

## Setup and Installation

To run this project, you need to have Docker installed on your machine. Once you have Docker, you can use the following command to start the application:

```bash
docker-compose up
```

```bash
npm run start
```

This will start the PostgreSQL database and the application. You can then access the application at http://localhost:3000.
It also runs pgadmin to see the db contents at http://localhost:8080
