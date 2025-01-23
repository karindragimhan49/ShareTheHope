🌟 ShareTheHope 🌟
Building a bridge of hope, one donation at a time.

🖋️ Overview
ShareTheHope is a web platform designed to connect donors with recipients, making the act of giving simple, impactful, and meaningful.

With a clean and intuitive interface, ShareTheHope enables:

Donors to list items for donation effortlessly.
Recipients to browse and claim items as if shopping in a store.
Admins to oversee and manage the system seamlessly.
Our mission is to make sharing resources as easy as possible, fostering a world of collaboration and compassion.

✨ Features
Role-Based System: Separate dashboards for Admins, Donors, and Recipients.
Recipient-Friendly Interface: A shop-like experience for recipients to claim items.
Secure Authentication: Powered by JWT for secure access.
Modern UI: Tailored with Tailwind CSS for a sleek and responsive design.
MERN Stack: Leveraging MongoDB, Express, React, and Node.js for scalability and performance.
🛠️ Tech Stack
Category	Tools & Technologies
Frontend	React, Vite, Tailwind CSS
Backend	Node.js, Express.js, MongoDB
Authentication	JSON Web Tokens (JWT)
Dev Tools	Git, VS Code, Postman
🚀 Getting Started
Follow the steps below to set up and run the ShareTheHope project on your local machine.

Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
MongoDB (local or cloud setup)
Git
1️⃣ Backend Setup
Navigate to the backend directory:

bash
Copy
Edit
cd backend
Install backend dependencies:

bash
Copy
Edit
npm install
Create a .env file in the backend directory with the following keys:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  
PORT=5000  
Start the backend server:

bash
Copy
Edit
node index.js
The backend will run on http://localhost:5000.

2️⃣ Frontend Setup
Navigate to the frontend directory:

bash
Copy
Edit
cd frontend
Install frontend dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm run dev
The frontend will run on http://localhost:5173.

🛠️ How to Use
Donors: Log in, list items for donation, and manage your listings.
Recipients: Browse donations, claim items, and track your claims.
Admins: Oversee all donations, users, and claims to ensure smooth operations.
