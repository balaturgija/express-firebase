# Express Server for Firebase Functions

This repository contains an [Express](https://expressjs.com/) server that communicates with Firebase Functions and exposes a REST API for clients to interact with.

## Purpose

The purpose of this project is to provide a simple and efficient way to communicate with Firebase Functions via an Express server.

## Getting Started

To get started, you'll need to have Node.js and the Firebase CLI installed on your machine. Once you have those installed, clone this repository and run yarn to install the required dependencies.

You'll also need to set up your Firebase project and deploy your Functions. You can find more information on how to do that in the [Firebase documentation](https://firebase.google.com/docs/functions).

Next, create a **.env** file in the root directory of this project with the following variables:

```
PORT=<SERVER_PORT>
FIREBASE_FUNCTIONS_BASE_URL=<YOUR_FIREBASE_FUNCTIONS_BASE_URL>
```

Replace **<YOUR_FIREBASE_FUNCTIONS_BASE_URL>** with the base URL of your Firebase Functions. This will be used to communicate with your Firebase Functions from the Express server.

Once your Functions are deployed and your **.env** file is set up, you can start the Express server by running yarn `start:dev`. The server will listen on port **3000** by default, but you can customize this by setting the `PORT` environment variable.

## API Endpoints

This Express server exposes the following REST API endpoints:

- **GET /**: Endpoint description
