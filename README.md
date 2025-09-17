# 🩺 Online Doctor Appointment System

A full-stack web application to browse doctors, book appointments, manage profiles, and process payments. The project includes separate React apps for patients and admins/doctors, and an Express + MongoDB backend.

## Key Features
- Patient registration & JWT authentication
- Doctor discovery by specialty, detailed profiles
- Real-time appointment booking with slot management
- Online payments via Stripe and Razorpay
- Doctor dashboard to manage availability and profile
- Admin dashboard for platform oversight

## Tech Stack
- Frontend: React, React Router, Tailwind CSS, Axios
- Backend: Node.js, Express
- Database: MongoDB (Mongoose)
- Auth: JWT, bcrypt
- Payments: Stripe, Razorpay
- Media: Cloudinary

## Repository Layout
- admin/      — Admin & Doctor React app  
- frontend/   — Patient React app  
- backend/    — Express API and database models  

## Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (local or Atlas)
- Git

## How to run (locally)
1. Clone:
```bash
   git clone https://github.com/mannatsingla22/Online-Doctor-Appointment-System
```
2. Backend:
```bash
   cd backend
   npm install
   # create a `.env` (see below)
   npm run server
```
3. Frontend (patient):
```bash
   cd frontend
   npm install
   npm run dev
```
4. Admin/Doctor panel:
```bash
   cd admin
   npm install
   npm run dev
```

## Environment Variables (backend/.env)
- MONGO_URI=your_mongo_connection_string
- JWT_SECRET=your_jwt_secret
- CLOUDINARY_CLOUD_NAME=
- CLOUDINARY_API_KEY=
- CLOUDINARY_API_SECRET=
- STRIPE_SECRET_KEY=
- RAZORPAY_KEY_ID=
- RAZORPAY_KEY_SECRET=
- CURRENCY=USD
- PORT=4000