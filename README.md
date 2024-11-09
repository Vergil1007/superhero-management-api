# Superhero Management API

This project is a full-stack web application for managing superheroes. It includes both backend API and frontend components for a comprehensive solution to add, retrieve, update, and delete superhero data, including details like nickname, real name, origin, superpowers, catchphrase, and images.

## Technologies Used

### Frontend

- **HTML, CSS, JavaScript**: Basic web technologies for structuring, styling, and scripting the frontend.
- **React.js**: Library for building the user interface with reusable components.

### Backend

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building the REST API.
- **PostgreSQL**: Relational database to store superhero information.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js** (v14+)
- **PostgreSQL**
- **npm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vergil1007/superhero-management-api.git
   cd superhero-management-api
   ```

### Backend Setup

1. **Go to the backend folder**:

   ```bash
   cd backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **In PostgreSQL create a new database named superhero_management:**

   ```sql
   CREATE DATABASE superhero_management;
   ```

4. **In the backend root directory, create an .env file and add your database connection details:**:

   ```env
   DB_HOST=localhost
   DB_USER=yourusername
   DB_PASSWORD=yourpassword
   DB_NAME=superhero_management
   DB_PORT=5432
   ```

5. **To execute unit tests (I tried my best to make them, but I've never done it with node and react before and I honestly have no idea why it's giving errors there, because everything seems fine, but I didn't have time to make them properly ), use:**

   ```bash
   npm test
   ```

6. **Start the server (One of two options, depending on whether you are using nodemon):**

   ```bash
   node src/server.js

   nodemon src/server.js
   ```

7. **Also if you want you can go to the sql/superheroes.sql and copy the initial set of heroes from there to test.**

### Frontend Setup:

1. **Go to the frontend folder**:

   ```bash
   cd superhero-management-api
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run Frontend Development Server:**

   ```bash
   npm start
   ```
