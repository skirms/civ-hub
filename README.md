# Civ Hub

Civ Hub is a web app for sharing **Civilization VI** save games. Users can upload, filter, and download save game files, making it convenient to share and discover save games among the Civilization VI community.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (Ensure you have a MongoDB instance running)

### Installation

#### Server Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/skirms/civ-hub
    ```

2. Navigate to the server folder and install dependencies:
    ```bash
    cd server
    npm install
    ```

3. Set up your environment variables in a `.env` file:
    ```bash
    MONGO_URI=<Your MongoDB connection>
    CLOUDINARY_CLOUD_NAME=<Your Cloudinary cloud name>
    CLOUDINARY_API_KEY=<Your Cloudinary API key>
    CLOUDINARY_API_SECRET=<Your Cloudinary API secret>
    ```

4. Start the server:
    ```bash
    npm start
    ```

#### Client Setup

1. Navigate to the client folder and install dependencies:
    ```bash
    cd client
    npm install
    ```

2. Set up your environment variables in a `.env` file:
    ```bash
    REACT_APP_API_URL=http://localhost:3001/api
    ```

3. Start the client:
    ```bash
    npm start
    ```

### Cross-references

- [Server Repository](https://github.com/skirms/civ-hub/tree/main/server)
- [Client Repository](https://github.com/skirms/civ-hub/tree/main/client)

## Tech Stack

| Side       | Technologies                                                        |
|------------|---------------------------------------------------------------------|
| **Server** | Node.js, Express, MongoDB, Mongoose, Cloudinary, Multer             |
| **Client** | React, Axios, React Router DOM                                      |
