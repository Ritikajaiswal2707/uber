# 🚗 Uber-Like Ride Sharing App

> **A modern, real-time ride-sharing application built with React and Node.js**

Hey there! 👋 This is a full-stack Uber-like ride sharing application that I've built from scratch. Think of it as your personal "Uber Clone" with all the essential features you'd expect from a ride-sharing platform.

## 🎯 What This App Does

Have you ever wanted to build an Uber-like app? Well, this is exactly that! This application allows:

- **Users** to request rides from pickup to destination
- **Captains** (drivers) to receive ride requests and navigate to passengers
- **Real-time tracking** of captains and ride status
- **Authentication system** for both users and captains
- **Payment processing** (simulated)
- **Socket.io integration** for live updates

## 🚀 Live Demo

- **Frontend:** [Live on Vercel](https://your-vercel-url.vercel.app) _(Update this with your actual deployment URL)_
- **Backend:** [Live on Render](https://uber-backend-api-1.onrender.com/)

## 🛠️ Tech Stack

### Frontend
- **React** 18+ with hooks and context
- **Vite** for lightning-fast development
- **Tailwind CSS** for beautiful, responsive UI
- **React Router** for navigation
- **Socket.io Client** for real-time communication
- **Axios** for API calls

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Socket.io** for real-time features
- **JWT** for authentication
- **Express Validator** for input validation
- **bcrypt** for password hashing

### Cloud & Databases
- **MongoDB Atlas** for cloud database
- **Vercel** for frontend deployment
- **Render** for backend deployment

## 📁 Project Structure

```
uber/
├── Backend/                 # Node.js/Express backend
│   ├── controllers/         # Route handlers
│   ├── models/             # Database schemas
│   ├── routes/             # API endpoints
│   ├── services/          # Business logic
│   ├── middlewares/       # Authentication & validation
│   └── db/                # Database connection
├── frontend/               # React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context for state
│   │   └── config/        # Configuration files
│   └── public/            # Static assets
└── backend-deploy/        # Deployment-ready backend
```

## 🔧 Getting Started

### Prerequisites
Make sure you have these installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB Atlas account** (free tier works!)
- **Google Maps API key** (optional for testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ritikajaiswal2707/uber.git
   cd uber
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install
   
   # Create .env file
   echo "PORT=3000" > .env
   echo "DB_CONNECT=your_mongodb_connection_string" >> .env
   echo "JWT_SECRET=your_super_secret_jwt_key" >> .env
   echo "GOOGLE_MAPS_API=your_google_maps_api_key" >> .env
   echo "NODE_ENV=development" >> .env
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   
   # Create .env file
   echo "VITE_BE_URL=http://localhost:3000" > .env
   ```

4. **Run the application**
   
   Backend (Terminal 1):
   ```bash
   cd Backend
   npm start
   ```
   
   Frontend (Terminal 2):
   ```bash
   cd frontend
   npm run dev
   ```

5. **Open your browser**
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:3000`

## 🎨 Features Overview

### 🔐 Authentication System
- User registration and login
- Captain (driver) registration and login
- JWT-based authentication
- Protected routes and middleware

### 🚗 Ride Management
- **Request a Ride**: Users can enter pickup and destination
- **Find Available Captains**: Real-time captain matching in radius
- **Ride Confirmation**: Captains can accept/reject rides
- **Live Tracking**: Real-time location updates during ride
- **Payment**: Simulated payment processing
- **Ride Completion**: End ride and rate experience

### 📍 Location Services
- Location autocomplete suggestions
- Distance and time estimation
- Real-time captain location tracking
- Geospatial queries for finding nearby captains

### 💬 Real-time Communication
- Socket.io integration for instant updates
- Ride request notifications
- Status updates (pending → accepted → started → completed)
- Live location sharing

## 🔑 Environment Variables

### Backend (.env)
```env
PORT=3000
DB_CONNECT=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
GOOGLE_MAPS_API=your_google_maps_api_key
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_BE_URL=http://localhost:3000
```

## 🚀 Deployment Guide

### Frontend (Vercel)
1. Push your `frontend/` folder to GitHub
2. Connect repository to Vercel
3. Set Root Directory to `frontend`
4. Add environment variable: `VITE_BE_URL=https://your-backend-url.com`

### Backend (Render)
1. Push your backend code to a separate GitHub repository
2. Create web service on Render
3. Connect GitHub repository
4. Add environment variables in Render dashboard
5. Deploy!

## 🎯 How to Use the App

### As a User
1. **Sign Up/Login**: Create account or login
2. **Enter Details**: Add pickup and destination
3. **Request Ride**: Choose vehicle type and confirm
4. **Wait for Captain**: See available captains in real-time
5. **Track Ride**: Monitor captain arrival and route
6. **Complete Journey**: Rate and pay for the ride

### As a Captain (Driver)
1. **Register**: Sign up as a driver with vehicle details
2. **Go Online**: Login to start receiving ride requests
3. **Accept Rides**: Choose rides to accept
4. **Navigate**: Get directions and pickup passengers
5. **Complete Ride**: Mark ride as complete

## 🐛 Troubleshooting

### Common Issues

**Registration Failed?**
- Check if names are at least 2 characters long
- Ensure all required fields are filled
- Verify backend is running

**No Captains Found?**
- Captains need to be online and have valid locations
- Check if captain registration was successful
- Ensure both user and captain are in same area

**Socket Connection Issues?**
- Verify backend is running on correct port
- Check firewall settings
- Ensure proper environment variables

## 🛡️ Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation and sanitization
- CORS protection
- Environment variable security

## 🤝 Contributing

Hey, want to contribute? That's awesome! 🎉

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 What I've Learned

Building this app taught me:

- **Real-time Applications**: Socket.io implementation for live updates
- **Geospatial Data**: Working with MongoDB's geospatial queries
- **Authentication**: JWR token management and middleware
- **State Management**: React Context for global state
- **Database Design**: Efficient schema design for ride-sharing
- **API Design**: RESTful endpoints with proper validation
- **Deployment**: Cloud platforms for production apps

## 🎉 Future Enhancements

Want to make this app even better? Here are some ideas:

- [ ] **Payment Integration**: Real payment processing with Stripe/Razorpay
- [ ] **Push Notifications**: Mobile notifications for ride updates
- [ ] **Rating System**: Rate captains and users after rides
- [ ] **Advanced Matching**: AI-powered captain-rider matching
- [ ] **Multi-language Support**: Internationalization
- [ ] **Admin Dashboard**: Analytics and user management
- [ ] **Mobile App**: React Native version
- [ ] **Emergency Features**: Emergency contacts and SOS

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Got questions? Found a bug? Want to collaborate?

- **Email**: [your-email@example.com]
- **LinkedIn**: [Your LinkedIn Profile]
- **Project Link**: [https://github.com/Ritikajaiswal2707/uber]

---

⭐ **Star this repo if you found it helpful!** ⭐

> Built with ❤️ and lots of coffee ☕

---

**Note**: This is a demonstration project. For production use, consider additional security measures, payment integration, and proper testing.
