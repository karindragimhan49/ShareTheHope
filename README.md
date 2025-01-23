🌟 ShareTheHope 🌟

Building a bridge of hope, one donation at a time.
🖋️ Overview

ShareTheHope is a platform designed to connect donors with recipients, simplifying the act of giving while fostering collaboration and compassion. The platform also enables schools to list their needs, ensuring donations reach the right hands effectively.
Features:

    Donors: Effortlessly list items for donation.
    Recipients: Browse and claim items with a shop-like experience.
    Admins: Seamlessly oversee and manage operations.
    Schools: Collaborate to receive and manage donations directly.

🎯 Key Highlights

    Role-Based System: Separate dashboards for Admins, Donors, and Recipients.
    Modern UI: Built with React, Tailwind CSS, and Vite for sleek responsiveness.
    Secure Authentication: Powered by JWT for safe access.
    MERN Stack: Ensures scalability and performance.

🛠️ Technologies Used
Category	Technologies
Frontend	React.js, Vite, Tailwind CSS
Backend	Node.js, Express.js, MongoDB
Authentication	JSON Web Tokens (JWT), bcrypt.js
📂 Project Structure

ShareTheHope/  
├── backend/  
│   ├── config/          # Database and environment setup  
│   ├── controllers/     # Application logic (e.g., auth, donations)  
│   ├── models/          # Database schemas (User, Donations, etc.)  
│   ├── routes/          # API endpoints  
│   └── index.js         # Entry point for backend server  
├── frontend/  
│   ├── public/          # Static files  
│   ├── src/             # Source files  
│   │   ├── components/  # Reusable React components  
│   │   ├── pages/       # Page-level components  
│   │   ├── utils/       # Helper functions  
│   │   └── App.jsx      # Main app file  
│   └── vite.config.js   # Vite configuration  
├── .env                 # Environment variables  
└── README.md            # Project documentation  

🚀 Installation and Setup
Prerequisites

Ensure you have the following installed:

    Node.js (v14 or higher)
    MongoDB (local or cloud)
    Git

Backend Setup

    Navigate to the backend directory:

cd backend

Install dependencies:

npm install  

Create a .env file in the backend directory with the following content:

MONGO_URI=<your-mongodb-uri>  
JWT_SECRET=<your-jwt-secret>  
PORT=5000  

Start the backend server:

    node index.js  

    The backend runs at http://localhost:5000.

Frontend Setup

    Navigate to the frontend directory:

cd frontend  

Install dependencies:

npm install  

Start the frontend development server:

    npm run dev  

    The frontend runs at http://localhost:5173.

📋 API Endpoints
Authentication

    POST /api/auth/register: Registers a new user.
    POST /api/auth/login: Authenticates a user.

Donations

    GET /api/donations: Retrieves a list of donations.
    POST /api/donations: Adds a new donation.

🛠️ Future Enhancements

    Add notifications for donation updates.
    Implement an admin dashboard.
    Integrate payment gateways for monetary donations.

🤝 Contributing

    Fork the repository.
    Clone it to your local machine:

git clone https://github.com/karindragimhan49/ShareTheHope.git  

Create a new branch for your feature:

git checkout -b feature-name  

Commit your changes and push the branch:

    git push origin feature-name  

📄 License

This project is licensed under the MIT License.
🌟 Start sharing hope today!

Together, we can make a difference. 💖