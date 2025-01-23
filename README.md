# ShareTheHope - Donation Application

## Overview

'ShareTheHope' is a donation application designed to collect funds and distribute them to schools across the country. The application includes features such as user authentication, donation tracking, and fund allocation management. The backend supports secure login and registration, while the frontend provides an intuitive user interface for managing donations.

## Live Demo

- **Frontend**: [Vercel Live Demo](https://your-frontend-link.vercel.app/)
- **Backend**: [Render API Endpoint](https://your-backend-api-endpoint.onrender.com)

## Screenshots

![ShareTheHope_Screenshot1](https://github.com/yourusername/ShareTheHope/assets/screenshot1)

![ShareTheHope_Screenshot2](https://github.com/yourusername/ShareTheHope/assets/screenshot2)

![ShareTheHope_Screenshot3](https://github.com/yourusername/ShareTheHope/assets/screenshot3)

## Technologies Used

- **Frontend**: React.js, Tailwind CSS, Ant Design
- **Backend**: Node.js, Express.js, MongoDB Atlas
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: Vercel (Frontend), Render (Backend)

## Features

- **User Authentication**:
  - Secure login and registration for users to access donation and transaction features.
  
- **Donation Management**:
  - Users can view available funds, make donations, and track their donation history.
  - Admins can manage school fund allocations and approve donations.
  
- **Transaction History**:
  - Users can view a history of all donations made, with details of the amount and recipient schools.
  
- **Secure Fund Transfer**:
  - Donations are processed securely and allocated to the appropriate schools.

## Assumptions

- Donations are made to schools across the country.
- User roles are defined (e.g., Donor, Admin).

## Project Structure

```plaintext
ShareTheHope/
│
├── backend/                 # Backend code (Express.js, MongoDB)
│   ├── models/              # Mongoose models
│   ├── routes/              # Express routes
│   ├── controllers/         # Backend logic
│   ├── .env                 # Environment variables (excluded in .gitignore)
│   └── server.js            # Main server file
│
├── frontend/                # Frontend code (React.js)
│   ├── src/                 # Source files
│   │   ├── components/      # React components
│   │   ├── pages/           # Pages
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│
├── README.md                # Project documentation
└── .gitignore               # Git ignore rules


## Installation and Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- JWT secret key for authentication

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ShareTheHope.git
   cd ShareTheHope/backend

    Install dependencies:

npm install

Create a .env file in the backend directory and add your environment variables:

PORT=5000
MONGO_URI=mongodb+srv://yourusername:yourpassword@cluster0.mongodb.net/ShareTheHope
NODE_ENV=development
JWT_SECRET=your-jwt-secret

Start the backend server:

    npm start

Frontend Setup

    Navigate to the frontend directory:

cd ../frontend

Install dependencies:

npm install

Start the frontend development server:

    npm start

    Note: No .env file is required for the frontend setup as all configurations are managed through the backend.

Usage

    Access the application via the frontend live demo link or localhost if running locally.
    Log in to create, manage, and view your donations and transaction history.
    Admin users can approve donations and allocate funds to schools.

Environment Variables

Create a .env file in the backend directory and add the following variables:
Backend

PORT=5000
MONGO_URI=mongodb+srv://yourusername:yourpassword@cluster0.mongodb.net/ShareTheHope
NODE_ENV=development
JWT_SECRET=your-jwt-secret

Frontend

    No .env file is required for the frontend.


Just replace the placeholders with the actual links, usernames, passwords, or keys you are using in yo