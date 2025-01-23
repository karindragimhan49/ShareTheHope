#ShareTheHope 🌟
##Overview

ShareTheHope is a platform designed to connect donors with recipients, simplifying the act of giving while fostering collaboration and compassion. The system enables donors to list items for donation and allows recipients to browse and claim items easily. Admins can oversee the operations, ensuring smooth transactions.
Live Demo

    Frontend: Frontend Demo Link
    Backend: Backend API Endpoint

Screenshots

    Screenshot 1
    Screenshot 2
    Screenshot 3

Technologies Used

    Frontend: React.js, Tailwind CSS
    Backend: Node.js, Express.js
    Database: MongoDB
    Authentication: JWT (JSON Web Tokens)
    Hosting: Vercel (Frontend), Render (Backend)

Features

    Role-Based System: Different dashboards for Admins, Donors, and Recipients.
    Secure Authentication: JWT-based user authentication.
    Donation Management: Users can list donations and claim items.

Assumptions

    Donors list items for donation.
    Recipients browse and claim items.
    Admins oversee the platform's operations.

Project Structure

ShareTheHope/
├── backend/                 # Backend code (Node.js & Express.js)
│   ├── models/              # MongoDB models
│   ├── routes/              # Express routes
│   ├── .env                 # Environment variables
│   └── index.js             # Main server entry point
│
├── frontend/                # Frontend code (React.js)
│   ├── src/                 # Source files
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── App.jsx          # Main app file
│   │   └── index.jsx        # Entry point
│
├── README.md                # Project documentation
└── .gitignore               # Git ignore rules

Installation and Setup
Prerequisites

    Node.js (v14 or higher)
    MongoDB (local or cloud)
    Git

Backend Setup

    Clone the repository:

git clone https://github.com/karindragimhan49/ShareTheHope.git
cd ShareTheHope/backend

Install dependencies:

npm install

Create a .env file in the backend directory and add your environment variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

Start the backend server:

    node index.js

Frontend Setup

    Navigate to the frontend directory:

cd ../frontend

Install dependencies:

npm install

Start the frontend development server:

    npm run dev

Usage

    Access the application via the frontend live demo link or localhost if running locally.
    Donors can list their donations and view their history.
    Recipients can browse donations and claim items.
    Admins can manage the entire system.

Environment Variables
Backend

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

Frontend

    No .env file is required for the frontend.