Civ Hub

Civ Hub is a web app for sharing Civilization VI save games. It allows users to upload, filter, and download save games.

Tech Stack
Server-Side:

    Node.js
    Express
    MongoDB
    Mongoose
    Cloudinary
    Multer

Client-Side:

    React
    Axios
    React Router DOM

Setup
Server-Side:

cd server
npm i express mongoose multer cloudinary dotenv
npm start

Client-Side:

cd client
npm i react react-dom axios react-router-dom
npm start

Environment Variables
Server (.env)

MONGO_URI=<Your MongoDB connection>
CLOUDINARY_CLOUD_NAME=<Your Cloudinary cloud name>
CLOUDINARY_API_KEY=<Your Cloudinary API key>
CLOUDINARY_API_SECRET=<Your Cloudinary API secret>

Client (.env)

REACT_APP_API_URL=http://localhost:3001/api
