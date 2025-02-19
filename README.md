# Superman Web Application

A modern web application dedicated to the Man of Steel, featuring his adventures, abilities, and heroic feats.

## Tech Stack

- Frontend: React.js with TypeScript
- Backend: Node.js with Express
- Styling: Tailwind CSS
- Database: MongoDB

## Features

- Interactive dashboard showcasing Superman's latest heroic activities
- Real-time global incident map
- Comprehensive database of Superman's abilities and feats
- News feed of Superman's latest rescues and appearances
- Mobile-responsive design for heroes on the go

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd superman-webapp
```

2. Install dependencies:
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
```

3. Create a `.env` file in the root directory:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/superman-db
```

4. Start the development servers:
```bash
# Start backend (from root directory)
npm run dev

# Start frontend (from client directory)
cd client
npm start
```

## Project Structure

```
superman-webapp/
├── client/                 # Frontend React application
├── server/                 # Backend Node.js/Express server
├── public/                 # Static files
└── package.json           # Project dependencies
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.