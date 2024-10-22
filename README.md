# Fullstack Task Manager (MERN)

## Overview
The **Cloud-Based Task Manager** is a web application designed to streamline task management and team collaboration. Built with the **MERN stack** (MongoDB, Express.js, React, and Node.js), it offers an intuitive interface for efficient task assignment, tracking, and collaboration, catering to both administrators and regular users.

## Problem
Managing tasks via spreadsheets or manual systems can be inefficient and error-prone. This application addresses these challenges by providing a centralized task management platform to enhance collaboration and workflow efficiency.

## Background
With the rise of remote work and dispersed teams, tools that facilitate effective task coordination are crucial. This platform leverages modern web technologies to deliver a responsive and scalable solution, enhancing user experience with **Redux Toolkit**, **Headless UI**, and **Tailwind CSS**.

## Features

### Admin Features:
- **User Management**: Create admin accounts, add/manage team members.
- **Task Assignment**: Assign tasks to users, update task details and statuses.
- **Task Properties**: Label tasks as 'todo,' 'in progress,' or 'completed'; set task priority; manage sub-tasks.
- **Asset Management**: Upload assets such as images.
- **User Account Control**: Enable/disable user accounts, trash or permanently delete tasks.

### User Features:
- **Task Interaction**: Update task status, view task details.
- **Communication**: Add comments or chat within task activities.

### General Features:
- **Authentication/Authorization**: Secure login and role-based access control.
- **Profile Management**: Update user profiles.
- **Password Management**: Change passwords securely.
- **Dashboard**: Provide task summaries and filter tasks by status (todo, in progress, completed).

## Technologies Used

### Frontend:
- **React (Vite)**: UI framework
- **Redux Toolkit**: State management
- **Headless UI**: Accessible components
- **Tailwind CSS**: Utility-first CSS framework

### Backend:
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework

### Database:
- **MongoDB**: NoSQL database

---

## Setup Instructions

### Server Setup

#### Environment Variables
Create a `.env` file in the `server` directory with the following values:

- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Any secure secret key
- `PORT`: Default is 8800 (or any preferred port)
- `NODE_ENV`: `development`

#### MongoDB Setup:
1. [Create a MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas).
2. Create a new cluster and configure your connection URL.
3. Update your `.env` file with the MongoDB connection string.

#### Steps to Run the Server:
1. Open the project in your preferred code editor.
2. Navigate to the `server` directory: `cd server`.
3. Install dependencies: `npm install`.
4. Start the server: `npm start`.
   
   You should see a confirmation message indicating the server is running and the database is connected.

### Client Setup

#### Environment Variables
Create a `.env` file in the `client` directory with the following values:
- `VITE_APP_BASE_URL`: Backend server URL (default: `http://localhost:8800`).
- `VITE_APP_FIREBASE_API_KEY`: Firebase API key.

#### Steps to Run the Client:
1. Navigate to the `client` directory: `cd client`.
2. Install dependencies: `npm install`.
3. Start the client: `npm run dev`.
   
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.



This version is structured for easier readability while retaining all the important setup instructions and project details.
