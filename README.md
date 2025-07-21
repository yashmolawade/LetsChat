# LetsChat - Real-time Chat Application

LetsChat is a modern real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO for real-time communication. It features a beautiful UI built with Tailwind CSS and DaisyUI.

## Features

- 🔐 **User Authentication**

  - Secure signup and login
  - JWT-based authentication
  - Protected routes
  - Profile management

- 💬 **Real-time Messaging**

  - Instant message delivery
  - Message read receipts
  - Online/offline status
  - Typing indicators
  - Message notifications

- 📎 **Media Sharing**

  - Image upload and sharing
  - Cloudinary integration for media storage
  - View-once media option

- 🎨 **User Interface**

  - Modern and responsive design
  - Dark/light theme support
  - Loading skeletons
  - Toast notifications
  - Message sound effects

- 🔔 **Notifications**
  - Browser notifications
  - Sound notifications
  - Unread message indicators

## Tech Stack

### Frontend

- React.js with Vite
- Tailwind CSS & DaisyUI for styling
- Zustand for state management
- React Router for navigation
- Socket.IO client for real-time features
- React Hot Toast for notifications

### Backend

- Node.js & Express.js
- MongoDB & Mongoose
- Socket.IO for real-time communication
- JWT for authentication
- Cloudinary for media storage

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB installed locally or MongoDB Atlas account
- Cloudinary account for media storage

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/LetsChat.git
cd LetsChat
```

2. Install backend dependencies

```bash
cd backend
npm install
```

3. Create a .env file in the backend directory

```env
PORT=5001
MONGODB_URI=mongodb://127.0.0.1:27017/mychatapp
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. Install frontend dependencies

```bash
cd ../frontend
npm install
```

5. Start the development servers

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd frontend
npm run dev
```

The application should now be running at:

- Frontend: http://localhost:5173
- Backend: http://localhost:5001

## Project Structure

```
LetsChat/
├── backend/
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   └── lib/           # Utilities and configurations
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/     # React components
    │   ├── pages/          # Page components
    │   ├── store/          # Zustand store
    │   ├── lib/            # Utilities
    │   └── constants/      # Constants and configurations
    └── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Socket.IO](https://socket.io/)
- [Cloudinary](https://cloudinary.com/)
- [MongoDB](https://www.mongodb.com/)

---

Made with ❤️ by Yash
