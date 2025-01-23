# 🌟 ShareTheHope 🌟  
*Building a bridge of hope, one donation at a time.*  

---

## 🖋️ Overview  
**ShareTheHope** is a platform designed to connect **donors** with **recipients**, simplifying the act of giving while fostering collaboration and compassion.  

### Features:  
- **Donors**: Effortlessly list items for donation.  
- **Recipients**: Browse and claim items with a shop-like experience.  
- **Admins**: Seamlessly oversee and manage operations.  

---

## 🎯 Key Highlights  
- **Role-Based System**: Separate dashboards for Admins, Donors, and Recipients.  
- **Modern UI**: Built with **Tailwind CSS** for sleek responsiveness.  
- **Secure Authentication**: Powered by **JWT** for safe access.  
- **MERN Stack**: Ensures scalability and performance.  

---

## 🛠️ Technologies Used  
| **Category**     | **Technologies**                       |  
|-------------------|---------------------------------------|  
| **Frontend**      | React.js, Vite, Tailwind CSS          |  
| **Backend**       | Node.js, Express.js, MongoDB          |  
| **Authentication**| JSON Web Tokens (JWT)                 |  

---

## 📂 Project Structure  

ShareTheHope/ │ ├── backend/ # Backend code (Node.js & Express.js) │ ├── models/ # MongoDB models │ ├── routes/ # API routes │ ├── .env # Backend environment variables │ └── index.js # Entry point for backend │ ├── frontend/ # Frontend code (React.js) │ ├── src/ # Source files │ │ ├── components/ # Reusable components │ │ ├── pages/ # Page components │ │ ├── App.jsx # Main app file │ │ └── index.jsx # Entry point for frontend │ └── README.md # Project documentation

yaml
Copy
Edit

---

## 🚀 Installation and Setup  

### Prerequisites  
Ensure you have the following installed:  
- [Node.js](https://nodejs.org/) (v14 or higher)  
- [MongoDB](https://www.mongodb.com/) (local or cloud)  
- [Git](https://git-scm.com/)  

---

### 1️⃣ Backend Setup  

1. Clone the repository and navigate to the `backend` directory:  
   ```bash
   git clone https://github.com/karindragimhan49/ShareTheHope.git  
   cd ShareTheHope/backend  
Install dependencies:

bash
Copy
Edit
npm install  
Create a .env file in the backend directory with the following:

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
The backend runs at http://localhost:5000.

2️⃣ Frontend Setup
Navigate to the frontend directory:

bash
Copy
Edit
cd ../frontend  
Install dependencies:

bash
Copy
Edit
npm install  
Start the frontend development server:

bash
Copy
Edit
npm run dev  
The frontend runs at http://localhost:5173.

🌐 Usage
Access the frontend to log in or register.
Donors can list items for donation.
Recipients can browse and claim available items.
Admins can manage the entire system.
🌟 Start sharing hope today!
Together, we can make a difference. 💖

