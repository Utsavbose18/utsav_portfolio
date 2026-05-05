# Utsav Bose Portfolio

A modern personal portfolio web application built with the MERN stack. The app presents a clean developer profile, project showcase, blog section, resume download, and contact form. The frontend is built with React, React Router, CSS, Framer Motion animations, and React Icons. The backend is built with Node.js, Express, MongoDB, Mongoose, Nodemailer, CORS, and dotenv.

## Features

- Modern responsive personal portfolio UI
- Dark and light theme support
- Animated sections and project cards
- Home, About, Projects, Blog, Resume, Timeline, Skills, and Contact pages
- Project cards with tech stack, GitHub link, live demo link, and image support
- Contact form connected to the backend
- MongoDB storage for project and contact data
- Optional email notification using Nodemailer
- Beginner-friendly project structure

## Tech Stack

### Frontend

- React
- React Router DOM
- Axios
- Framer Motion
- React Icons
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv
- Nodemailer

## Project Structure

```txt
my_portfolio 1.0/
├── backend/
│   ├── controllers/
│   │   ├── messageController.js
│   │   └── projectController.js
│   ├── models/
│   │   ├── Message.js
│   │   └── Project.js
│   ├── routes/
│   │   ├── messageRoutes.js
│   │   └── projectRoutes.js
│   ├── utils/
│   │   └── sendEmail.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   └── resume.pdf
│   ├── src/
│   │   ├── assets/
│   │   │   └── profile.jpg
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Timeline.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── styles.css
│   ├── .env
│   └── package.json
│
└── README.md
```

## Backend API

### Base URL

```txt
http://localhost:5000
```

### Routes

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/` | Checks if the API is running |
| GET | `/projects` | Gets all projects from MongoDB |
| POST | `/projects` | Creates a new project |
| POST | `/messages` | Saves a contact form message and optionally sends email |

## Environment Variables

### Backend `.env`

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USER=your_email@example.com
MAIL_PASS=your_email_password_or_app_password
MAIL_TO=receiver_email@example.com
```

Email settings are optional. If they are not configured, the message will still be saved in MongoDB and email sending will be skipped gracefully.

### Frontend `.env`

Create a `.env` file inside the `frontend` folder:

```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

Restart the frontend server after changing `.env`.

## How to Run Locally

Open two PowerShell terminals.

### Terminal 1: Run Backend

```powershell
cd "C:\Users\utbab\personal_projects\my_portfolio 1.0\backend"
npm install
node server.js
```

The backend should show:

```txt
MongoDB connected
Server on http://localhost:5000
```

If you want to use `npm run dev`, add this to `backend/package.json`:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

Then install nodemon:

```powershell
npm install --save-dev nodemon
npm run dev
```

### Terminal 2: Run Frontend

```powershell
cd "C:\Users\utbab\personal_projects\my_portfolio 1.0\frontend"
npm install
npm install framer-motion react-icons axios react-router-dom
npm start
```

The frontend should open at:

```txt
http://localhost:3000
```

## Add Your Resume

Put your resume PDF here:

```txt
frontend/public/resume.pdf
```

Then the resume download button can use:

```txt
/resume.pdf
```

## Add Your Profile Image

Put your profile image here:

```txt
frontend/src/assets/profile.jpg
```

## Project Data Format

Each project document in MongoDB should follow this structure:

```json
{
  "title": "CRM Lead Management System",
  "description": "Built a role-based CRM dashboard with lead tracking, filtering, pagination, status history and admin controls.",
  "tech": ["React", "Node.js", "Express", "MongoDB"],
  "github": "https://github.com/your-username/project-repo",
  "demo": "https://your-live-demo-link.com",
  "image": "https://your-image-link.com/project.png"
}
```

## Contact Form Data Format

The contact form sends this data to the backend:

```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I would like to contact you."
}
```

## Common Errors and Fixes

### Missing script: dev

This happens when you run `npm run dev` in a folder where `package.json` does not have a `dev` script.

Use:

```powershell
cd backend
node server.js
```

Or add a `dev` script to `backend/package.json`.

### Frontend cannot connect to backend

Check that the backend is running on port `5000` and frontend has this in `frontend/.env`:

```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

Then restart frontend:

```powershell
Ctrl + C
npm start
```

### MongoDB connection failed

Check these things:

- `MONGO_URI` is correct
- Your MongoDB Atlas username and password are correct
- Your current IP address is allowed in MongoDB Atlas Network Access
- The database user has proper permissions

## Deployment Notes

### Frontend on Vercel

Use these settings:

```txt
Root Directory: frontend
Build Command: npm run build
Output Directory: build
```

Add this environment variable in Vercel:

```env
REACT_APP_API_BASE_URL=https://your-backend-url.onrender.com
```

### Backend on Render

Use these settings:

```txt
Root Directory: backend
Build Command: npm install
Start Command: node server.js
```

Add these environment variables in Render:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
MAIL_HOST=your_mail_host
MAIL_PORT=587
MAIL_USER=your_mail_user
MAIL_PASS=your_mail_password
MAIL_TO=your_receiver_email
```

## Recommended Git Commands

From the project root:

```powershell
git status
git add .
git commit -m "Update modern portfolio UI and README"
git push
```

## Author

**Utsav Bose**

- GitHub: `https://github.com/Utsavbose18`
- LinkedIn: `https://www.linkedin.com/in/utsav-bose-197708298`

## License

This project is for personal portfolio use.
