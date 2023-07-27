# Socket.io Chat App

This is a real-time chat application built using Socket.io, with a frontend implemented in React and a backend built with Node.js, Express, and Socket.io server.

## Technologies Used

- Frontend:
  - React
  - react-scroll-to-bottom
  - socket.io-client

- Backend:
  - Node.js
  - Express
  - Socket.io
    

## How it works

The Socket.io Chat App allows users to join a chat room and communicate with each other in real-time. Here's a brief overview of how the app works:

1. **Frontend Interface**: The frontend of the application is developed using React, providing an intuitive user interface to enter the chat room and send messages.

2. **Backend Server**: The backend server is built using Node.js and Express, which handle client-server communication and routing.

3. **Socket.io Server**: Socket.io is used to enable real-time bidirectional communication between the server and clients. It allows instant message broadcasting to all connected users in the same chat room.

4. **Chat Functionality**: When a user enters a chat room and sends a message, the message is emitted to the Socket.io server. The server then broadcasts the message to all connected clients in the same room, updating their chat windows with the new message.

5. **Live Chat Experience**: As users send messages, they are instantly displayed on their screens, providing a seamless and live chat experience.

## Getting Started

To run the Socket.io Chat App locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/dhruvalgupta2003/Socket.io-ChatApp.git
cd socket-io-chat-app
```

2. Install dependencies:

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Start the development servers:

```bash
# Start frontend server (from the "frontend" directory)
npm start

# Start backend server (from the "backend" directory)
npm start
```

4. Open your web browser and navigate to `http://localhost:3000` to access the Socket.io Chat App.

## Contribute

Feel free to contribute to the project by creating pull requests or reporting issues. Your contributions are highly appreciated!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
