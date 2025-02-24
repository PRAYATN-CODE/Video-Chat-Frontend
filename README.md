# Video Chat Application

## Overview
The **Video Chat Application** allows users to create rooms and have real-time video conversations with other users in the same room. The application is built with a scalable and modular architecture, utilizing modern technologies for seamless video communication.

## Features
- **Room-based Video Chat**: Users can create or join rooms to communicate via video and audio.
- **Real-time Communication**: WebRTC is used for peer-to-peer video streaming.
- **User Authentication**: Secure login system with JWT authentication.
- **Scalability & Performance**: Backend built with Node.js and TypeScript for efficient handling of video streams.
- **Responsive UI**: Fully responsive frontend with an intuitive interface.
- **Socket-based Signaling**: Uses WebSockets for signaling between users in a room.

---

## Tech Stack

### Frontend:
- **React.js** (with Vite for fast development)
- **Redux** (for state management)
- **WebRTC** (for video and audio streaming)
- **Tailwind CSS** (for styling)

### Backend:
- **Node.js** with **TypeScript**
- **Express.js** (for REST API handling)
- **Socket.io** (for real-time signaling)
- **JWT Authentication** (for secure user sessions)

---

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **npm** or **yarn**

### Clone the Repository
```sh
git clone https://github.com/your-repo/video-chat-app.git
cd video-chat-app
```

### Install Dependencies
#### Frontend:
```sh
cd frontend
npm install
```
#### Backend:
```sh
cd backend
npm install
```

---

## Running the Application

### Start Backend Server
```sh
cd backend
npm run dev
```

### Start Frontend
```sh
cd frontend
npm run dev
```

The application will be accessible at `http://localhost:3000`

---

## Usage
1. **Login or Register**: Users must log in to access the video chat rooms.
2. **Create a Room**: Users can create a room and share the room ID with others.
3. **Join a Room**: Enter the room ID to join an existing room.
4. **Video Chat**: Start a real-time video chat with participants in the same room.

---

## Folder Structure
```
video-chat-app/
│── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── store/       # Redux store
│   ├── public/
│   ├── vite.config.js
│   ├── package.json
│
│── backend/
│   ├── src/
│   │   ├── controllers/  # API Controllers
│   │   ├── models/       # Database Models
│   │   ├── routes/       # Express Routes
│   │   ├── services/     # Business Logic
│   ├── server.ts
│   ├── package.json
```

---

## Future Enhancements
- **Screen Sharing**
- **Chat Messaging**
- **User Profiles & Avatars**
- **Database Integration for Room Persistence**

---

## Contributing
Feel free to fork this repository and contribute improvements via pull requests.

---

## License
This project is licensed under the MIT License.

---

## Contact
For any questions or issues, feel free to contact **[Your Name]** at **your.email@example.com**.

