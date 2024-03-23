# NoteKeeper

NoteKeeper is a backend application designed to provide a RESTful API for managing textual notes. This project utilizes Express.js for the backend and MongoDB as the database management system to store the notes. Additionally, a CI/CD pipeline is set up using GitHub Actions to automate the process of testing, building, and deploying the application to Heroku.

## Application Development

### Initialization

- Set up the development environment for Express.js and MongoDB.
- Create a GitHub repository for the project to host the source code.
- Use GitHub Actions for CI/CD.

### Core Features

- **RESTful API**: Build an API with Express.js to handle CRUD operations on notes, including creation, reading, updating, and deletion.
- **Data Model**: Use Mongoose to define the data model for notes, including a title, content, and timestamps for creation and last modification.
- **Request Validation**: Implement validation for incoming requests to ensure the validity of note data before processing.

### CI/CD with GitHub Actions

- **Automated Tests**: Configure GitHub Actions to run automated tests (unit tests and integration tests) on each push or pull request to the main branch.
- **Automatic Deployment**: Set up a GitHub Actions workflow to automate the deployment of the application to Heroku upon merging changes into the main branch.

## Deployment

- Prepare and configure the application on Heroku.
- Configure MongoDB Atlas database to store notes persistently.
- Use environment variables on Heroku to secure sensitive information such as database connection strings.

## Usage

### Installation

- Run `npm install` or `yarn` to install dependencies.

### Running the Server

- Run `npm run dev` or `yarn dev` to start the development server.

### Running Tests

- Run `npm test` or `yarn test` to execute tests.

