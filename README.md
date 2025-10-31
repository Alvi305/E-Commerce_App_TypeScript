# TypeSript MERN SolaraLuxe

A TypeScript App showcase by building a fully-functional e-commerce website  like amazon using MERN stack (MongoDB, ExpressJS, React and Node.JS).

## Features

- React hooks to handle form inputs and fetch backend api
- Handling shopping cart using reducers and local storage
- Building backend web api by node.js, express.js and MongoDB
- Handling authentication and authorization using JsonWebToken and express middleware.
- PayPal and Stipe for online payment,
- Render for deployment
- Google Map for locate customer address on map
- Mailgun to email order receipt to user

## Run Locally

### 1. Clone repo

```
$ git clone git@github.com:Alvi305/E-Commerce_App_TypeScript.git
```

### 2. Create .env File

- duplicate .env.example in backend folder and rename it to .env

### 3. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URI=mongodb://localhost/{E-Commerce_App_TypeScript}
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

### 4. Run Backend

```
$ cd backend
$ npm install
$ npm start
```

### 5. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm run dev
```

### 6. Seed Users and Products

- Run this on browser: http://localhost:5000/api/seed
- It returns admin email and password and 6 sample products

### 7. Admin Login

- Run http://localhost:4000/api/seed to create sample items and admin user with password
- Enter admin email and password and click signin

This app was made following the tutorial guidelines of the following video: https://www.youtube.com/watch?v=-ifcPnXHn8Q. 

